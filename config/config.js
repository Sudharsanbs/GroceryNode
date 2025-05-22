const localConfig = require("./local.config");

const deployment = "local";

const selectedConfig = deployment === "server" ? serviceConfig : localConfig;

module.exports = selectedConfig;
