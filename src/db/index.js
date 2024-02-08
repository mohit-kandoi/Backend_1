import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//Function connectDB:
// This is an asynchronous function defined using the async keyword. It's responsible for establishing a connection to the MongoDB database.
// Inside the function, a try-catch block is used to handle potential errors that might occur during the connection process.

// Connection to MongoDB:
// mongoose.connect() is called within the try block to establish a connection to the MongoDB database. It uses the MONGODB_URI environment variable provided through process.env and appends the database name from the DB_NAME constant.
// The connection is "awaited" since mongoose.connect() returns a promise. Once the connection is established, a connectionInstance object is returned.
// A log message is printed indicating that the MongoDB connection was successful. It displays the host of the MongoDB connection.
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
    process.exit(1);
  }
};
export default connectDB;

// Export:
// The connectDB function is exported as the default export, allowing it to be imported and used in other parts of the application.
