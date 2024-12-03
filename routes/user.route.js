const express = require("express");
const router = express.Router();
const user = require("../models/user.model.js");

const {
  getUsers,
  getUserId,
  getUserEmail,
  updateuser,
  createuser,
  deleteuser,
  deleteuserbyEmail,
} = require("../controllers/user.controller.js");

router.get("/", getUsers); //api to view the users
router.get("/:id", getUserId); //api to view the user by id
router.get("/email/:email", getUserEmail); //api to view the user by email
router.post("/", createuser); //api to add a user

router.put("/:id", updateuser); //api to update the user by id

router.delete("/:id", deleteuser); //api to delete the user by id
router.delete("/email/:email", deleteuserbyEmail); //api to delete the user by id

module.exports = router;
