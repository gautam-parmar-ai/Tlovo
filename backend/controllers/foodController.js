import foodModel from "../models/foodModel.js";
import { v2 as cloudinary } from "cloudinary";

// add food item
const addFood = async (req, res) => {
  const image_url = req.file.path; // ← Cloudinary returns a URL not a filename

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_url, // ← store full URL now
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Occurred" });
  }
};

// remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    // Delete from Cloudinary using the public_id
    const publicId = food.image.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(`food_images/${publicId}`);
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
