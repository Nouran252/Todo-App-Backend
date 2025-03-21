const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const cookie_parser = require("cookie-parser");
const { connectDB } = require("./DB/ConnectDB.js");
const userRouter = require("./Routers/user.routes.js");
const authRouter = require("./Routers/auth.routes.js");
const { checkUser } = require("./middlewares/auth.middleware.js");
const todosRouter = require("./Routers/todos.routes.js")
const app = express();

app.use(express.json());
app.use(cookie_parser());


app.use("/auth", authRouter);
app.use("*", checkUser);
app.use("/todos",todosRouter);
app.use("/user",userRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});