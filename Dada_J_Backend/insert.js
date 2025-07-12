const mongoose = require('mongoose')
const Shopkeeper = require('./models/shopkeeper')

mongoose.connect('mongodb://localhost:27017/Dada_Jewelry_and_Decoration_Notes')
   .then(async () => {
      await Shopkeeper.create({
         names: "IGIRANEZA Uhiriwe Guerschom",
         username: "Guer",
         email: "guer@gmail.com",
         phone: "0739420593",
         password: "uuuuu"
      })

      console.log("Shopkeeper inserted successfully")
      process.exit()
   })
   .catch((err) => {
      console.error(err)
   })