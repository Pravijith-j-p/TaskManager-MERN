import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    // Access the environment variable correctly
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;

import jwt from 'jsonwebtoken';

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Set to true if using HTTPS
    sameSite: 'none', // Use valid values for sameSite
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
  });
};
