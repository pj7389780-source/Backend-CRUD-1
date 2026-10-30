const { default: mongoose } = require("mongoose")
require("dotenv").config()

const connectMongoDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connencted")
   } catch (error) {
    console.log("Error while connecting MongoDB",error)
   }
}
module.exports = connectMongoDB;