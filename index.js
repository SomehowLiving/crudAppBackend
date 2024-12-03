const express = require("express");

const mongoose = require("mongoose");
const user = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");

const app = express(); //initialisation of app

//Middleware
app.use(express.json()); //to get json type data
app.use(express.urlencoded({ extended: false })); //to get url encoded type

//routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from nodeman Node API");
});

mongoose
  .connect(
    MONGO_URL
  )
  .then(() => {
    console.log("connected to the database");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
