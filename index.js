const express = require("express");
const cookie_parser = require("cookie-parser");
const { connectDB } = require("./db/connectDB.js");
const userRouter = require("./routers/users.routers.js");
const authRouter = require("./routers/auth.router.js");
const { checkUser } = require("./middlewares/auth.middleware.js");




const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});