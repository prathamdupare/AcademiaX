import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  isPro: {
    type: Boolean,
    default: false,
  },
  courses: {
    type: Array,
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
