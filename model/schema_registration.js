// Import the Mongoose library
import mongoose from "mongoose";

// Define the user schema for the User model
const userSchema = new mongoose.Schema({
  // Define the email field as a string, which is required and must be unique
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Define the password field as a string, which is required
  password: {
    type: String,
    required: true
  }
});

// Export the User model, either by using the existing model if it exists, or by creating a new model using the user schema
module.exports = mongoose.models.User || mongoose.model('User', userSchema);

