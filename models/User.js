import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: "string",
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email address",
    },
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Please provide a password"],
    minlenght: 6,
  },
  lastName: {
    type: "string",
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: 20,
    default: "lastName",
  },
  location: {
    type: "string",
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: 20,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", UserSchema);
