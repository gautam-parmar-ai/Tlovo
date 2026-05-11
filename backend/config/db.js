import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gautamanjali_0921:gautam1234@sicilia.zilawco.mongodb.net/tlovo?appName=sicilia",
    )
    .then(() => console.log("DB CONNECTED"));
};
