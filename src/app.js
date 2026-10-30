const express = require('express');
const connectMongoDB = require('./config/connectDB');
const cors = require("cors")
const app = express()
const taskRouter = require("./Routing/Task.Route")
connectMongoDB()
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json())

app.use("/Tasks", taskRouter);


module.exports = app;