import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    // Correct access to the token from cookies
    let token = req.cookies?.token;

    if (token) {
      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by ID and select isAdmin and email
      const user = await User.findById(decodedToken.userId).select("isAdmin email");

      if (!user) {
        return res.status(401).json({ status: false, message: "User not found" });
      }

      // Attach user information to the request object
      req.user = {
        email: user.email,
        isAdmin: user.isAdmin,
        userId: decodedToken.userId,
      };

      next(); // Proceed to the next middleware or route handler
    } else {
      return res.status(401).json({ status: false, message: "No token provided" });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ status: false, message: "Not authorized. Try logging in again" });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try logging in as admin.",
    });
  }
};

export { protectRoute, isAdminRoute };
