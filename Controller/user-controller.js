import { response } from "express";
import userSchema from "../Schema/user-schema.js";
const addUser = async (request, response) => {
  const user = request.body;
  console.log("userval", user);
  const newUser = new userSchema(user);

  try {
    await newUser.save();
    response.status(201).send(newUser);
  } catch (err) {
    response.status(409).send({ message: err.message });
  }
};
export default addUser;

export const getUsers = async (req, res) => {
  try {
    const allUserData = await userSchema.find({});
    res.status(201).json(allUserData);
  } catch (err) {
    console.log("ERR FROM GET USER API!!!", err);
    res.status(404).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const allUserData = await userSchema.find({ _id: req.params.id });
    res.status(201).json(allUserData);
  } catch (err) {
    console.log("ERR FROM GET  USER FOR UPDATE API!!!", err);
    res.status(404).json({ message: err.message });
  }
};

export const editUser = async (req, res) => {
  let user = req.body;
  const editUserDet = new userSchema(user);
  try {
    await userSchema.updateOne({ _id: req.params.id }, editUserDet);
    res.status(201).json(editUserDet);
  } catch (err) {
    console.log("ERR FROM EDIT  USER API!!!", err);
    res.status(404).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  console.log(req.params.id)
  try {
    await userSchema.deleteOne({ _id: req.params.id });
    return res.status(201).json({ message: "USER DELETED SUCCESSFULLY" });
  } catch (err) {
    console.log("ERR FROM DELETE USER API", err);
    res.status(404).json({ message: err.message });
  }
};
