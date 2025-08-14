const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const checkUser = await User.findOne({ $or: [{ name }, { email }] });
    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist!!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPass,
      role: role,
    });

    await newUser.save();

    if (newUser) {
      return res.status(200).json({
        success: true,
        message: "User create successfully!!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User failed to register",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({
      success: false,
      message: "Error happen. Cannot register user!",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const passMatch = await bcrypt.compare(password, findUser.password);

    if (!passMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password!!",
      });
    }

    const accessToken = jwt.sign(
      {
        userId: findUser._id,
        email: findUser.email,
        role: findUser.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: findUser,
      accessToken,
    });
  } catch (e) {
    console.error("Error happen. Please try again.");
    res.status(500).json({
      success: false,
      message: "Some error occur! Please try again!",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
