const Sequelize = require("sequelize");

const model = {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  shopName: {
    type: Sequelize.STRING,
  },

  ownerName: {
    type: Sequelize.STRING,
  },

  mobile: {
    type: Sequelize.STRING,
  },

  address: {
    type: Sequelize.STRING,
  },

  city: {
    type: Sequelize.STRING,
  },

  state: {
    type: Sequelize.STRING,
  },

  pincode: {
    type: Sequelize.STRING,
  },

  businessHours: {
    type: Sequelize.STRING,
  },

  workingDays: {
    type: Sequelize.STRING,
  },

  delivery: {
    type: Sequelize.STRING,
  },

  paymentMethods: {
    type: Sequelize.STRING,
  },

  gstin: {
    type: Sequelize.STRING,
  },

  fssai: {
    type: Sequelize.STRING,
  },
  location : {
    type : Sequelize.STRING
  },
  email : {
    type : Sequelize.STRING
  }
};

module.exports = { model };
