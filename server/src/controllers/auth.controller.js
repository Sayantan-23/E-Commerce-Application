import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";

export const singUp = asyncHandler(async (req, res) => {
  // get data for user
  const {name, email, password} = req.body

  // validation
  if (!name || !email || !password) {
    throw new CustomError("Please fill all fields", 400)
  }
})