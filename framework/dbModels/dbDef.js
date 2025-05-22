const { Sequelize } = require("sequelize");
const profile = require("./models/profile");
const userCredentials = require("./models/userCredentials");
const session = require("./models/session");


const db = new Sequelize(require("../../config/config").development);

const profileDbDef = db.define("profile", profile.model, {
  tableName: "profile",
  timestamps: true,
});

const sessionDbDef = db.define("session", session.model, {
  tableName: "session",
  timestamps: true,
});

const userCredentialsDbDef = db.define(
  "userCredentials",
  userCredentials.model,
  {
    tableName: "userCredentials",
    timestamps: true,
  }
);


db.authenticate();
db.sync({ alter: true });

module.exports = {
  profile: profileDbDef,
  session: sessionDbDef,
  userCredentials: userCredentialsDbDef,
};
