const express = require("express");
const cookie_parser = require("cookie-parser");
const { connectDB } = require("./DB/ConnectDB.js");
//const userRouter = require("./Routers/users.routers.js");
const authRouter = require("./Routers/auth.routes.js");
const { checkUser } = require("./middlewares/auth.middleware.js");
const todosRouter = require("./Routers/todos.routes.js")
const app = express();

app.use(express.json());
app.use(cookie_parser());


app.use("/auth", authRouter);
app.use("*", checkUser);
app.use("/todos",todosRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});