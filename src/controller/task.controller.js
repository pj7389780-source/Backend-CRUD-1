const TaskModel = require("../models/task.Model");

const createTaskController = async (req, res) => {
  body = req.body;
  const createdData = await TaskModel.create(body);
  res.status(201).json({
    message: "Created",
    data: createdData,
  });
};
const getAllTasksController = async (req, res) => {
  const data = await TaskModel.find();
  res.status(200).json({
    message: "Retrived Entire Data",
    data,
  });
};
const getSingleTaskController = async (req, res) => {
  const data = await TaskModel.findById(req.params.id);
  res.status(200).json({ message: "Single Data Retrieved", data });
};
const deleteTaskController = async(req,res)=>{
    await TaskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Deleted Successfully"
    })

}
const updateViaPatchContoller = async(req,res)=>{
    const updatedData = await TaskModel.findByIdAndUpdate(req.params.id,req.body,{
        ReturnDocument:"after"
    })
    res.status(200).json({
        message:"Updates via PATCH",
        data:updatedData
    })
}
const updateViaPutContoller = async (req, res) => {
  const updatedData = await TaskModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
    },
  );
  res.status(200).json({
    message: "Updates via PATCH",
    data: updatedData,
  });
};

module.exports = {
  createTaskController,
  getAllTasksController,
  getSingleTaskController,
  deleteTaskController,
  updateViaPatchContoller,
  updateViaPutContoller,
};
