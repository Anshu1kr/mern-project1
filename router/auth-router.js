/* express.Router

In Express.js, express.Router() is a mini Express application without all the server configurations but 
with the ability to define routes, middleware and even have its own set of route handlers. It allows you to
modularize your routes and middleware to keep your code organized and maintainable.

https://expressjs.com/en/guide/routing.html

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete 
middleware and routing system; for this reason, it is often referred to as a "mini-app". */

const express = require("express");
const authControllers = require("../controllers/auth-controller");
const router = express.Router();

router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);

module.exports = router;
