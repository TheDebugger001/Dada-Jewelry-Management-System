
const jwt = require("jsonwebtoken")

const { body, validationResult } = require('express-validator')

const shopkeeperValidationRules = [
   body("names")
      .notEmpty()
      .withMessage("Name is required"),

   body("username")
      .notEmpty()
      .withMessage("Username is required"),
      
   body("email")
      .isEmail()
      .withMessage("This field should contain Email"),

   body("phone")
      .matches(/^07\d{8}$/)
      .withMessage("Phone number must have 10 digits "),

   body("password")
   .isLength({ min: 8 })
   .withMessage("Password should have at least 8 digits"),

]

const validateShopkeeper = (req, res, next) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      res.status(400).json({ error: errors.array()  })
   }

   next()
}

const authShopkeeper = async (req, res, next) => {
   try{

      const authHeader = req.headers.authorization
      if(!authHeader || !authHeader.startsWith("Bearer ")) {
         return res.status(401).json({ message: "No token sent"})
      }
   
      const token = authHeader.split(" ")[1]
   
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
   
      if(decode.role !== 'shopkeeper') {
         return res.status(403).json({ message: "Access forbidden: not a shopkeeper"})
      }
   
      req.shopkeeper = decode
   
      next()

   } catch (error) {
      res.status(500).json({ error: "Error, Server error", error})
   }
}

module.exports = {
   shopkeeperValidationRules,
   validateShopkeeper,
   authShopkeeper
}