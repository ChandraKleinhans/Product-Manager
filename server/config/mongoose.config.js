const mongoose = require("mongoose");

module.exports = (DB_NAME) =>{
    mongoose.connect(`mongodb://localost/${DB_NAME}`)
        .then(() => console.log(`🤖 CONNECTED TO ${DB_NAME}🤖`))
        .catch(err => console.log(`CANNOT CONNECT TO ${DB_NAME}`, err))
}