import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("database connected");

    app.on("error", (error) => {
      console.error("Error:", error);
      throw error;
    });

    const onListening = () => {
      console.log(`Listing on port ${config.PORT}`);
    };

    app.listen(config.PORT, onListening);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
