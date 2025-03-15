const bcrypt = require("bcrypt");
const Users = require("../Modules/users.module");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "mysecret", {
    expiresIn: maxAge,
  });
};

const signIn = async (req,res )=>{
   try {
    const {email , password} = req.body;
        const user = await Users.findOne({email});
        if(!user){
            return res.status(400).send({
                status: 400,
                msg: "invalid email or password",
              });
        }
        const auth = bcrypt.compare(password,user.password);
        if (auth) {
            const token = createToken(user._id);
            res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });
            return res.status(200).send({
              status: 200,
              success : true,
              data: user,
              msg : "Logged in successfully!"
            });
          } else {
            return res.status(400).send({
              status: 400,
              msg: "Incorrect password",
            });
          }
   } catch (error) {
    res.status(500).send({
        status :500,
        msg : "server error",
    });
   }
};


const signUp = async (req,res)=>{
  try {
    const {username ,email, password} = req.body;
    const newuser = new Users({
     username,
     email,
     password,
    });
      await newuser.save();
      res.status(201).send({
         status: 201,
         success:true,
         data: newuser,
         msg:"User registered successfully",
       });
  } catch (error) {
    res.status(500).send({
        status: 201,
        error: error.message,
      });
  }
   
};

const signOut = async (req, res) => {
    res.cookie("token", "", { maxAge: 1 });
    res.status(200).send({
      status: 200,
      success: true,
      msg: "User signed out successfully",
    });
  };


module.exports = { signIn, signOut, signUp };