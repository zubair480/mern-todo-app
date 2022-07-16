const express = require("express");
const router = express.Router();
const user = require("../models/userSchema");

router.get("/", function (req, res) {
  console.log("Success");
});

// register user

router.post("/register", async (req, res) => {
  const { name, email, age, phoneNumber, profession, address, description } =
    req.body;
  if (
    !name ||
    !email ||
    !age ||
    !phoneNumber ||
    !profession ||
    !address ||
    !description
  ) {
    res.status(404).json("Please fill all required fields");
  }

  try {
    const preUser = await user.findOne({ email: email });
    console.log(preUser);

    if (preUser) {
      res.status(404).json("User already exists");
    } else {
      const addUser = new user({
        name,
        email,
        age,
        phoneNumber,
        profession,
        address,
        description,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
});

// get user
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await user.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

// get indivisual user data

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userIndivisual = await user.findById({ _id: id });
    console.log(userIndivisual);
    res.status(201).json(userIndivisual);
  } catch (err) {
    res.status(404).json(err);
  }
});
// update user data

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(404).json(error);
  }
});
// delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await user.findByIdAndDelete({ _id: id });
    console.log(deleteUser);
    res.status(201).json(deleteUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;

// {
//   "name": "zubair"
// "email": "test@gmail.com",
// "age": "20",
// "phoneNumber": "030303003",
// "profession": "web developer",
// "address": "test address",
// "description": "this is a test description",
// }
