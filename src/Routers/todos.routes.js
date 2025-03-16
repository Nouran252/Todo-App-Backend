const express = require("express");
const router = express.Router();
const controller = require("../Controller/todos.controller");

router.post("/add-todo",controller.add_todo);
router.put("/change-status/:id",controller.change_status);
router.delete("/delete-todo/:id",controller.delete_todo);
router.get("/getById/:id",controller.getbyId);

module.exports = router;

