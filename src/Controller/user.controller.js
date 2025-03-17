const Users = require("../Modules/users.module");
const Todos = require("../Modules/todo.module");

const get_todos = async (req,res) =>{
  try {
    const user_id = req.userId;
    const user = await Users.findById(user_id)
    .populate("todos", "title description status") 
    .select("todos");
    if (!user) {
      return res.status(400).send({
        status: 400,
        msg: "invalid email or password",
      });
    }
    res.status(200).send({
      status: 200,
      success:true,
      todos: user.todos,
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).send({

        status: 500,
        msg: "Server Error!",
      });
  }
}



const get_remain_todos = async (req,res) =>{
    try {
      const user_id = req.userId;
      const user = await Users.findById(user_id)
    .populate("todos", "title description status") 
    .select("todos");
      if (!user) {
        return res.status(400).send({
          status: 400,
          msg: "invalid email or password",
        });
      }

      const remain_todos = user.todos.filter((t)=> t.status === false);
      res.status(200).send({
        status: 200,
        todos: remain_todos,
      });
    } catch (error) {
      res.status(500).send({
          status: 500,
          msg: "Server Error!",
        });
    }
  }





module.exports = { get_todos ,get_remain_todos};