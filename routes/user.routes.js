import express from "express";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const uploadImage = await cloudinary.uploader.upload(
      req.files.logoUrl.tempFilePath
    );

    console.log("IMAGE 👉", uploadImage);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hashedPassword,
      channelName: req.body.channelName,
      phone: req.body.phone,
      logoUrl: uploadImage.secure_url,
      logoId: uploadImage.public_id,
    });

    let user = await newUser.save();

    res.status(201).json({
      user,
    });
  } catch (error) {}
});

export default router;
