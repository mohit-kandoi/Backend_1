// This code sets up an Express.js application with various middleware to handle HTTP requests and responses.

import express from "express";
// express: This imports the Express.js framework, which simplifies the process of building web applications and APIs in Node.js
import cors from "cors";
// cors: This imports the CORS (Cross-Origin Resource Sharing) middleware, which allows control over how resources on a web page can be requested from another domain.
import cookieParser from "cookie-parser";
// cookieParser: This imports the middleware used for parsing cookies in the incoming requests.

const app = express();
// Initializes an Express application by calling 'express()'

// cors: The CORS middleware is applied using app.use(). It is configured to allow requests from origins specified in the CORS_ORIGIN environment variable, with credentials enabled (credentials: true). This means the server can receive requests from other origins and include cookies or HTTP authentication information in the request.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
export { app };
