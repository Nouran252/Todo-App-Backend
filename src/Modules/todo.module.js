const  mongoose  = require("mongoose");
 
const todoSchema = new mongoose.Schema({

    
  title: { type: String, required: true },  // Required title
  description: { type: String, required: true },  // Required description
  status: { type: Boolean, default: false },  // Default status is false
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

module.exports = mongoose.model("Todos", todoSchema);
