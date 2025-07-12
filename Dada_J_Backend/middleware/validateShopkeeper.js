
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

module.exports = {
   shopkeeperValidationRules,
   validateShopkeeper
}