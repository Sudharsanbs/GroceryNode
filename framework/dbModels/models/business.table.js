const Sequelize = require("sequelize");

const model = {

    id : {
        type : Sequelize.STRING,
        primaryKey : true
    },

    name : {
        type : Sequelize.STRING

    },

    url : {
        type : Sequelize.STRING

    },

}

module.exports = { model }