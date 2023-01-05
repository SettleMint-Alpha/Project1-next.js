// Import the connect function from the lib/mongodb module
import connect from "../../lib/mongodb";

// Import the User model from the model/schema module
import User from '../../model/schema_registration';

// Establish a connection to the MongoDB database
connect();

// Declare the handler function, which will handle the registration request
export default async function handler(req, res) {
  try {
    // Use the User model's create method to create a new user with the request body data
    const user = await User.create(req.body);
    // If the user was successfully created, redirect the user to the home page
    res.redirect('/');
    // If the user was not created, return a response with a status message
    if (!user) {
      return res.json({"code": 'User not created'});
    }
  } catch (error) {
    // If there is an error creating the user, return a response with a status message
    res.status(400).json({status: 'Not able to create a new user.'});
  }
}
