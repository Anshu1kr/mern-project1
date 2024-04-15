const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Page

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to mern stack project using by controller");
  } catch (error) {
    console.log(error);
  }
};

// Registration logic
// ----------------------------
// 1. Get Registration Data: Retrieve user data (username, email, phone, password).
// 2. Check Email Existence: Check if the email is already registered.
// 3. Hash Passowrd: Securely hash the password.
// 4. Create User: Create a new user with hashed password.
// 5. Save to DB: Save user data to the database.
// 6. Respond: Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
module.exports = { home, register };
