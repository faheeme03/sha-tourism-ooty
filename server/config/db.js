const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

let isConnectedToMongo = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log('ℹ️  No MONGODB_URI detected in environment. Using SHA Tourism Autonomous Local JSON Storage Engine.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    isConnectedToMongo = true;
    return true;
  } catch (err) {
    console.warn(`⚠️  MongoDB connection failed (${err.message}). Seamlessly falling back to Autonomous Local JSON Storage Engine.`);
    isConnectedToMongo = false;
    return false;
  }
};

const isMongoActive = () => isConnectedToMongo;

module.exports = { connectDB, isMongoActive };
