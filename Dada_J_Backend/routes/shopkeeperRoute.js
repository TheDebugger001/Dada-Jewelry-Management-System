const express = require('express');
const router = express.Router()
const { registerShopkeeper } = require("../controllers/shopkeeperController")
const { 
   shopkeeperValidationRules,
   validateShopkeeper 
} = require("../middleware/shopkeeper.middleware")

router.post('/register', shopkeeperValidationRules, validateShopkeeper, registerShopkeeper)

module.exports = router