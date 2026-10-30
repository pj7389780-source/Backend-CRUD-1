const express = require("express")
const { createTaskController, getAllTasksController, getSingleTaskController, deleteTaskController, updateViaPatchContoller, updateViaPutContoller } = require("../controller/task.controller")

let router = express.Router()

// GET
router.get("/allTask", getAllTasksController);
router.get("/singleTask/:id",getSingleTaskController)

// POST
router.post("/create",createTaskController)

//Update
router.patch("/updateviaPATCH/:id", updateViaPatchContoller);
router.put("/updateviaPUT/:id", updateViaPutContoller);

//delete
router.delete("/delete/:id", deleteTaskController);

module.exports = router