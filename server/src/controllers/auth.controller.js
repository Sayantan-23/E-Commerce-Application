import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../utils/customError.js";
import User from "../models/user.schema.js";

export const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true
}

export const singUp = asyncHandler(async (req, res) => {
  // get data for user
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    throw new CustomError("Please fill all fields", 400);
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError("User already exists", 400);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJWTtoken();
  //safety
  user.password = undefined;

  //store this token in user's cookie
  res.cookie("token", token, cookieOptions);

  // send back a response to user
  res.status(200).json({
    success: true,
    token,
    user,
  });
});
