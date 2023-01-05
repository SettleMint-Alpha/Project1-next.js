import mongoose from 'mongoose';

// Define the user schema
const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  cgpa: {
    type: String,
    required: true
  }
});

// Export the form data model
module.exports = mongoose.models.FormData || mongoose.model('FormData', formDataSchema);
