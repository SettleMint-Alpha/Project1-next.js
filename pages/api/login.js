// Import the connect function from the lib/mongodb module
import connect from "../../lib/mongodb";

// Import the User model from the model/schema module
import User from '../../model/schema_registration';

// Establish a connection to the MongoDB database
connect();

// Declare the handler function, which will handle the login request
export default async function handler(req, res) {
  // Destructure the email and password fields from the request body
  const {email, password} = req.body;

  // Find the user in the database with the specified email and password
  const user = await User.findOne({email, password});

  // If the user is not found, return a response with a status message
  if (!user) {
    return res.json({status: 'Not able to find the user'});
  }
  // If the user is found, redirect the user to the home page
  else {
    res.redirect('/home');
  }
}
