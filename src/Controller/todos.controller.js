const Users = require("../Modules/users.module");
const Todos = require("../Modules/todo.module");

const add_todo = async(req ,res) => {
 try {
    const {title,description,status} = req.body;
    // check
    const user_id = req.userId;
    const user = await Users.findById(user_id);
    if (!user) {
      return res.status(404).send({
        status: 404,
        msg: "User not found!",
      });
    }
    const newtodo = new Todos({
        title,
        description,
        status,
        user,
    });
    
    user.todos.push(newtodo._id);
    await newtodo.save();
    await user.save();
 
     res.status(201).send({
     success: true,
     message: "Todo added successfully",
     todo: newtodo,
    });
 } catch (error) {
    res.status(500).send({
        status: 500,
        msg: "Server Error!",
      });
 }

}

const change_status = async (req,res) =>{
    try {
        const todo_id = req.params.id;
    const user_id = req.userId;
    const user = await Users.findById(user_id);
    const todo = await Todos.findById(todo_id);
    console.log(todo);
    
    if (!user) {
      return res.status(404).send({
        status: 404,
        msg: "User not found!",
      });
    }
    if (!todo) {
      return res.status(404).send({
        status: 404,
        msg: "todo not found!",
      });
    }
    if (todo.user != user_id) {
      return res.status(401).send({
        status: 401,
        msg: "UnAuthorized Access!",
      });
    }
    // toggle
    todo.status = !todo.status;
    await todo.save();
    res.json({ success: true, message: "Todo status updated successfully" });
    } catch (error) {
        res.status(500).send({
            status: 500,
            msg: "Server Error!",
          });
    }
}


const delete_todo = async (req,res) =>{
    try {
        const todo_id = req.params.id;
        const user_id = req.userId;
        const user = await Users.findById(user_id);
        const todo = await Todos.findById(todo_id);
        console.log(todo);
        
        if (!user) {
          return res.status(404).send({
            status: 404,
            msg: "User not found!",
          });
        }
        if (!todo) {
          return res.status(404).send({
            status: 404,
            msg: "todo not found!",
          });
        }
        if (todo.user != user_id) {
          return res.status(401).send({
            status: 401,
            msg: "UnAuthorized Access!",
          });
        }
        await todo.deleteOne();
        res.status(200).send({
          status: 200,
          success:true,
          msg: "Todo deleted successfully",
        });
      } catch (error) {
        res.status(500).send({
          status: 500,
          msg: "Server Error!",
        });
      }
}


const getbyId = async (req,res) => {
    try {
        const todo_id = req.params.id;
        const user_id = req.userId;
        const user = await Users.findById(user_id);
        const todo = await Todos.findById(todo_id);
        console.log(todo);
        
        if (!user) {
          return res.status(404).send({
            status: 404,
            msg: "User not found!",
          });
        }
        if (!todo) {
          return res.status(404).send({
            status: 404,
            msg: "todo not found!",
          });
        }
        if (todo.user != user_id) {
          return res.status(401).send({
            status: 401,
            msg: "UnAuthorized Access!",
          });
        }

    res.status(201).send({
        success:true,
        todo:todo,
    });

    } catch (error) {
        res.status(500).send({
            status: 500,
            msg: "Server Error!",
          });
    }
}

module.exports ={add_todo,change_status,delete_todo,getbyId};