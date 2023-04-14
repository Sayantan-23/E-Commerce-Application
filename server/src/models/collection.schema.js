import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [120, "Name should not be more than 150 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Collection", collectionSchema)
// Collection is how the collectionSchema will be saved in database. In database it will get converted in lower case and in plural - collections 
