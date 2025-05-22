function createId() {
    var now = Date.now();
    var id = now + Math.floor(Math.random() * now / 1000) * 1000 + (now % 1000);
    const counter = createId.counter || 0;
  
    createId.counter = (counter + 1) % 1000;
  
    const newId = id + counter;
    return newId;
  }
  
  async function create(modelCtor, data, id) {
    let objectToCreate = JSON.parse(JSON.stringify(data));
    objectToCreate.id = id;
  
    const object = await modelCtor.create(objectToCreate);
    return object;
  }
  
  async function bulkCreated(modelCtor, query) {
    const object = await modelCtor.bulkCreate(query);
  return object
  }
  
  async function update(modelCtor, data) {
    const object = await modelCtor.update(data);
    return object;
  }
  
  async function findByPk(modelCtor, id) {
    const foundObejct = await modelCtor.findByPk(id);
    return foundObejct;
  }
  
  async function find(modelCtor, criteria, attributes = "") {
    var query = {
      where: criteria,
      defaults: { criteria: {} },
      attributes: attributes,
      
    };
    const objects = await modelCtor.findAll(query);
    return objects;
  }
  
  async function findOneData(modelCtor, criteria, attributes = "") {
    var query = {
      where: criteria,
      defaults: { criteria: {} },    
      attributes: attributes,
    };
    const objects = await modelCtor.findOne(query);
    return objects;
  }
  
  module.exports = {
    create,
    update,
    findByPk,
    find,
    findOneData,
    bulkCreated,
    createId,
  };
  