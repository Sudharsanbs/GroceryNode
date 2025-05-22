const dbDefs = require("../../framework/dbModels/dbDef");
const dbService = require("../services/dbService");
const customError = require("../errorControllers/customError");
const errorMessage = require("../errorControllers/errorMessage.json");

// Auth Functions

async function signUp(req, res) {
  let user = await dbService.find(dbDefs.userCredentials, {
    phoneNumber: req.body.phoneNumber,
  });
  if (user.length != 0) {
    throw new customError(errorMessage.UserAlreadyExist);
  }
  let userData = await createCredentials(req, res);
  let profile = await createProfile(req, userData);
  let session = await getOrCreateSession(profile.id);

  return { profile, session };
}

async function login(req, res) {
  let foundUserCredentials = await dbService.find(dbDefs.userCredentials, {
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
  });
  if (foundUserCredentials.length == 0) {
    throw new customError(errorMessage.InvalidPhoneNumberOrPassword);
  }
  let user = await getUserInfoForUserSignIn(foundUserCredentials);
  return user;
}

async function createCredentials(req, res) {
  req.body.profileId = dbService.createId();
  let credentialsId = dbService.createId();
  let userCredentials = dbService.create(
    dbDefs.userCredentials,
    req.body,
    credentialsId
  );
  return userCredentials;
}

async function createProfile(req, credentials) {
  if (req.body.firstName || req.body.lastName) {
  req.body.name = `${req.body.firstName || ''} ${req.body.lastName || ''}`.trim();
}
  let profileData = await dbService.create(
    dbDefs.profile,
    req.body,
    credentials.profileId
  );
  return profileData;
}

async function getOrCreateSession(profileId) {
  let sessionData = {
    profileId: profileId,
  };
  let sessionFromDb = await dbService.find(dbDefs.session, sessionData);

  if (sessionFromDb.length != 0) {
    return sessionFromDb[0];
  }
  let id = dbService.createId();
  sessionFromDb = await dbService.create(dbDefs.session, sessionData, id);

  return sessionFromDb;
}

async function getUserInfoForUserSignIn(foundUserCredentials) {
  let profile = await dbService.find(dbDefs.profile, {
    id: foundUserCredentials[0].profileId,
  });

  let session = await getOrCreateSession(profile[0].id);
  return { session: session, profile: profile[0] };
}



module.exports = { signUp , login, getOrCreateSession}

