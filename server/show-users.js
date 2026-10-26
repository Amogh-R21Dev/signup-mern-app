// Prints every user stored in MongoDB (handy for checking the sign-up result)
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/signupdb")
  .then(async () => {
    const users = await User.find().lean();
    console.log(JSON.stringify(users, null, 2));
    await mongoose.disconnect();
  });
