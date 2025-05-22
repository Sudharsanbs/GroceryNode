const { Sequelize } = require('sequelize');
const shop  = require('./models/shop');
// const userCredentials  = require('./models/userCredentials');
// const session  = require('./models/session');
// const businessTable = require("./models/business.table")



const db = new Sequelize(require("../../config/config").development);


const groceryShopDbDef = db.define("shop", shop.model,{
    tableName : "shop",
    timestamps : true,
    paranoid:true
});

// const sessionDbDef = db.define("session",session.model , {
//     tableName: "session",
//     timestamps : true
// });

// const userCredentialsDbDef = db.define ("userCredentials",userCredentials.model , {
//     tableName : "userCredentials",
//     timestamps: true
// });
// const businessTableDbDef = db.define("businessTable",businessTable.model,{
//     tableName: "businessTable",
//     timestamps: true
// })

db.authenticate();
db.sync({alter: true});


module.exports = {
    shop : groceryShopDbDef,
    // session : sessionDbDef,
    // userCredentials : userCredentialsDbDef,
    // businessTable: businessTableDbDef,
}