const Sequelize = require('sequelize');


const model = {

    id : {
        type : Sequelize.STRING,
        primaryKey : true,
    },

    phoneNumber : {
        type : Sequelize.STRING
    },

    password : {
        type : Sequelize.STRING
    },

    roles : {
        type : Sequelize.STRING
    },

    email : {
        type : Sequelize.STRING
    },

    profileId : {
        type : Sequelize.STRING
    }

    
}

module.exports  = { model }