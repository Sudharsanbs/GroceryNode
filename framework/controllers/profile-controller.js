const dbService = require("../services/dbService");
const dbDefs = require("../dbModels/dbDef");

async function update(req, res) {
  let session = req.body.sessionData;
  console.log( 'req.body' , req.body)
  let profile = await dbService.findByPk(dbDefs.profile, session.profileId);
  let data = await dbService.update(profile, req.body);
  return data;
}

async function get(req, res) {
  let profileId = req.body.sessionData.profileId;
  let data = await dbService.findByPk(dbDefs.profile, profileId);
  return {
    profile: data,
  };
}

async function find(req, res) {
  if (req.body.criteria == null) {
    req.body.criteria = {};
  }

  let profileData = await dbService.find(
    dbDefs.profile,
    req.body.criteria
  );
  return profileData;
}


module.exports = { update , get, find }