const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
  Task_Name: {
    required: true,
    type: String,
  },
  Description: {
    required: true,
    minLength: 20,
    type: String,
  },
  priority:{
    type:String,
    required:true
  },
  Status: {
    type: String,
    default: "To Do",
    required: true,
  },
  Due_Date: {
    type: Date,
    required: true,
  },
});


const TaskModel = mongoose.model("TaskModel",taskSchema)
module.exports = TaskModel;