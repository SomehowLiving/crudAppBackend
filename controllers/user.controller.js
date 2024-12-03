const user = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const Users = await user.find({});
    res.status(200).json(Users);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findById(id);
    res.status(200).json(User);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getUserEmail = async (req, res) => {
  try {
    const { email } = req.params; // Extract email from the route parameters
    const User = await user.findOne({ email }); // Find a single user where the email matches
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(User); // If the user is found, respond with their details
  } catch (error) {
    // Catch and respond with any server-side errors
    res.status(500).json({ message: error.message });
  }
};

const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findByIdAndUpdate(id, req.body);
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await user.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//user creation or adding new records to the users collection.
const createuser = async (req, res) => {
  try {
    //created an obj User that will take the request that client shared
    // `req.body` contains the data sent by the client in JSON format.
    // The `user.create()` method insert a new record.
    const User = await user.create(req.body);
    res.status(200).json(User);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findByIdAndDelete(id);
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const deleteuserbyEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const User = await user.findBy(email);
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserId,
  getUserEmail,
  updateuser,
  createuser,
  deleteuser,
  deleteuserbyEmail,
};
