const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
   title: {type: String, required: true},
   description: {type: String, required: true},
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'createdModels',
      required: true
   },
   createdModels: {
      type: String,
      enum: ['admin', 'shopkeeper'],
      required: true
   },
   archived: {
      type: Boolean,
      default: false
   }
})

module.exports = mongoose.model("Notes", NoteSchema)