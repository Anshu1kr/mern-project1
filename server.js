require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

/* app.use(express.json()) => This line of code adds Express middleware that parses incoming request bodies
with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request
bode=y.This middleware is responsible for parsing JSON data from requests, and it should be applied at the
beginning of your middleware stack to ensure it's available for all subsequent route handlers.
*/

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on: ${PORT}`);
  });
});
