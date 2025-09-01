
const Note = require("../models/noteModel")

require('dotenv').config();
const jwt = require("jsonwebtoken")

exports.createNote = async (req, res) => {
   const { title, description } = req.body

   const token = req.headers.authorization?.split(" ")[1]
   if(!token) return res.status(401).json({ error: "No Token Provided "})

   const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
   const createdBy = decode.id

   const newNote = new Note({
      title,
      description,
      createdBy,
      createdModels: decode.role
   })

   await newNote.save();

   return res.status(200).json({ 
      message: "New note created successfully",
      note: Note
   })
}


exports.getAllNote = async (req, res) => {
   const token = req.headers.authorization?.(" ")[1]

   try{
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
      const shopkeeperId = decode.id
      const role = decode.role
   
      let notes;
   
      if (role === 'admin'){
         notes = await Note.find();
      }
      else if(role === 'shopkeeper'){
         notes = await Note.find({ createdBy: shopkeeperId, archived: false })
      }
      else{
         return res.status(403).json({ error: "Access Denied"})
      }
   
      return res.status(200).json({ notes })
   } catch(err) {
      return res.status(500).json({ message: "Invalid token"})
   }
}


exports.updateNote = async (req, res) => {

   const noteId = req.params.id
   const { title, description } = req.body
   const updatedData = {}

   if(title !== undefined || title !== '') updatedData.title = title
   if(description !== undefined || description !== '') updatedData.description = description
   
   try {

      let updatedNote = await Note.findByIdAndUpdate( noteId, updatedData, { new:true, runValidators: true})

      if(!updatedNote) {
         return res.status(401).json({ message: "Note not found"})
      }

      res.status(200).json({
         message: "Note updated successfully",
         note: updatedNote
      })

   } catch (err) {
      return res.status(500)
   }
}

exports.deleteNote = async (req, res) => {

   try{
      let noteId = req.params.id

      try {
         let deletedNote = await Note.findByIdAndDelete(noteId)
   
         if(!deletedNote) {
            return res.status(404).json({
               message: "Note not found"
            })
         }
   
         return res.status(200).json({
            message: "Note deleted successfully"
         })

      } catch (err) {
         return res.status(404).json({
            message: "Note not found"
         })
      }
   } catch(err) {
      console.error(err)
      return res.status(500).json({
         message : "Server Error"
      })
   }
} 