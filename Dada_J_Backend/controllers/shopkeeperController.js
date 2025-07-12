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
         password: hashedPassword
      });

      await newShopkeeper.save()

      const shopkeeperToken = jwt.sign(
         {id: newShopkeeper._id, email: newShopkeeper.email},
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