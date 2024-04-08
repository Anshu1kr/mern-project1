/* Controllers

In an Express.js application, a "controller" refer to a part of your code that is responsible for handling the
application's logic. Controllers are typically used to process incoming requests, interact with models (data source),
and send request back to clients. They help organize your application by separating concerns and following the MVC
(Model-View-Controller) design pattern.
*/

// Home Page

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to mern stack project using by controller");
  } catch (error) {
    console.log(error);
  }
};

// Registration logic

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page using by controller");
  } catch (error) {
    res.status(400).send({ msg: "Registration Page not found" });
  }
};
module.exports = { home, register };
