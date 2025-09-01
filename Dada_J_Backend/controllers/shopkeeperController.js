const Shopkeeper = require("../models/shopkeeper")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerShopkeeper = async (req, res) => {
   const { names, username, email, phone, password } = req.body;

   try{
      const existing_shopkeeper = await Shopkeeper.findOne({ email });

      if(existing_shopkeeper) return res.status(400).json({ error: "The Shopkeeper already exists"});

      const hashedPassword = await bcrypt.hash(password, 10)

      const newShopkeeper = new Shopkeeper({
         names,
         username,
         email,
         phone,
         password: hashedPassword,
         role: 'shopkeeper'
      });

      await newShopkeeper.save()

      const shopkeeperToken = jwt.sign(
         {id: newShopkeeper._id, email: newShopkeeper.email, role: newShopkeeper.role},
         process.env.JWT_SECRET_KEY,
         { expiresIn: "1h"}
         )

      return res.status(201).json({
         message: "Shopkeeper registered successfully",
         shopkeeperToken,
         shopkeeper: {
            id: newShopkeeper._id,
            names: newShopkeeper.names,
            email: newShopkeeper.email,
            phone: newShopkeeper.phone,
            password:  newShopkeeper.password
         }
      })

   } catch(err) {
      console.error(err);
      return res.status(500).json({error: err})
   }
}

exports.loginShopkeeper = async (req, res) => {
   try {

      const { username, email, password, } = req.body
      const db_shopkeeper = await Shopkeeper.findOne({ email })

      if(!db_shopkeeper) {
         return res.status(401).json({ message: "Shopkeeper not found"})
      }

      const isMatch = await bcrypt.compare(password, db_shopkeeper.password)
      if(!isMatch) {
         return res.status(401).json({ message: "Invalid Credentials"})
      }

      const login_token = jwt.sign(
         {
            id: db_shopkeeper._id,
            email: db_shopkeeper.email,
            role: 'shopkeeper'
         },
         process.env.JWT_SECRET_KEY,
         {expiresIn: "1h"}
      )

      return res.status(200).json({
         message: "Login Successfully",
         login_token,
         shopkeeper: {
            id: db_shopkeeper.id,
            email: db_shopkeeper.email,
            username: db_shopkeeper.username
         }
      })

   } catch (error) {
      return res.status(500).json({ error: "Server error", error})
   }

}

exports.viewProfile = async (req, res) => {
   
}