const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to mern stack project");
});

app.get("/register", (req, res) => {
  res.status(200).send("Welcome to mern stack registration page");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on: ${PORT}`);
});
