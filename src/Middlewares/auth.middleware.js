const jwt = require("jsonwebtoken");
const Users = require("../Modules/users.module");

const checkUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if (!decoded)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - invalid token" });

  req.userId = decoded.id;
  
  const user = await Users.findById(req.userId).select("-password");
  if (!user) {
    return res.status(404).json({ status: 404, message: "User not found" });
  }

  req.user = user; 
  next();
};

module.exports = { checkUser };
