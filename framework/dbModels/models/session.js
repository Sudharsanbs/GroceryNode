const Sequelize = require('sequelize');

const model = {
    id : {
        type : Sequelize.STRING,
        primaryKey : true
    },

    profileId : {
        type :Sequelize.STRING,
        allowNull : false
    },

}

module.exports = { model }