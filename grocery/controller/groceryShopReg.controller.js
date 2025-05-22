const groceryDbDefs = require("../dbModels/groceryDbDefs");
const dbService = require("../../framework/services/dbService");
const customError = require("../../framework/errorControllers/customError");
const errorMessage = require("../../framework/errorControllers/errorMessage.json");

async function create(req) {
  const shopId = await dbService.createId();
  if (req.file) {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    req.body.location = fileUrl;
  }
  const shopDetails = await dbService.create(
    groceryDbDefs.shop,
    req.body,
    shopId
  );
  return shopDetails;
}

async function update(req) {
  const shopDetails = await dbService.findByPk(
    groceryDbDefs.shop,
    req.body.shopId
  );
  if (!shopDetails) {
    throw new customError(errorMessage.dataNotFound);
  }

  if (req.file) {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    req.body.location = fileUrl;
  }

  const updateDetails = await dbService.update(shopDetails, req.body);

  return updateDetails;
}

async function get(req) {
  const shopId = req.body.shopId;
  const shopDetails = await dbService.findByPk(groceryDbDefs.shop, shopId);
  if (!shopDetails) {
    throw new customError(errorMessage.dataNotFound);
  }
  return shopDetails;
}

async function find(req) {
  const allShopDetails = await dbService.find(groceryDbDefs.shop, {});
  if (!allShopDetails) {
    throw new customError(errorMessage.dataNotFound);
  }
  return allShopDetails;
}

async function remove(req) {
  let id = req.body.id;

  if (!id) {
    throw new customError(errorMessage.dataNotFound);
  }

  let itemToDelete = await dbService.findByPk(groceryDbDefs.shop, id);

  if (!itemToDelete) {
    throw new customError(errorMessage.dataNotFound);
  }

  let deleteResult = await groceryDbDefs.shop.destroy({
    where: {
      id: id,
    },
  });

  if (deleteResult === 0) {
    throw new customError(errorMessage.deleteUndone);
  }

  return { message: "Item deleted successfully" };
}
module.exports = {
  create,
  update,
  get,
  find,
  remove,
};
