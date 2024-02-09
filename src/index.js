// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
// dotenv: This package loads environment variables from a .env file into process.env.

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// connectDB();
// Getting PROMISE from this Function(If the connection is successful, the server starts listening on a specified port (either the one provided in the environment variable process.env.PORT or port 8000 if not specified). A message is logged indicating that the server is running and on which port.
// If the connection fails, an error message is logged indicating that the MongoDB connection failed, along with the error object. )

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });

// Overall, this code sets up a server to run an application, connects it to a MongoDB database, and utilizes environment variables for configuration, including the port number.

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw err;
  }
})();
*/
