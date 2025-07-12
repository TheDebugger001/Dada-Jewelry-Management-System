const mongoose = require('mongoose');

const shopkeeperSchema = new mongoose.Schema({
   names : { type:String, required:true },
   username : { type:String, required:true },
   email : { type:String, required:true, unique:true },
   phone : { type:String, required:true },
   password : { type:String, required:true, unique:true }
}, {timestamp : true})

module.exports = mongoose.model("Shopkeeper", shopkeeperSchema)