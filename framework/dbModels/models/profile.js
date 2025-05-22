const Sequelize = require("sequelize");

const model = {

    id : {
        type : Sequelize.STRING,
        primaryKey : true
    },

    name : {
        type : Sequelize.STRING

    },

    phoneNumber : {
        
        type : Sequelize.STRING

    },

    status : {
        type : Sequelize.STRING

    },

    rewards : { 
        type : Sequelize.STRING

    },

    email : {
        type : Sequelize.STRING
        
    }
}

module.exports = { model }