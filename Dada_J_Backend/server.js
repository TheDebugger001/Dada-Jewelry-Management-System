
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config()
const app = express();

app.use(cors())
app.use(express.json())

const shopkeeperRoutes = require('./routes/shopkeeperRoute')
app.use("/api/shopkeepers", shopkeeperRoutes)

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
   .then(() => console.log('Database connected successfully'))
   .catch((err) => console.log('Error while connecting to Database \n',err))

app.get('/', (req, res) => {
   res.status(200).json({ message: "Hii everyone" });
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
})
