import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;

  // Support both names just in case
  const uri = process.env.MONGODB_URI || process.env.MONGODB_URL;

  if (!uri) {
    console.error("❌ Mongo env missing:", {
      MONGODB_URI: process.env.MONGODB_URI,
      MONGODB_URL: process.env.MONGODB_URL,
    });
    throw new Error("Please define MONGODB_URI or MONGODB_URL in .env.local");
  }

  try {
    console.log(
      "Connecting to MongoDB with host:",
      uri.split("@")[1] // log only host, hide credentials
    );
    await mongoose.connect(uri);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
