import connect from "../../lib/mongodb";
import FormData from '../../model/schema_form';

// Connect to the MongoDB database
connect();

// Export the API handler function
export default async function handler(req, res) {
  try {
    // console.log('Received request:', req); // log the request object
    // console.log('Request body:', req.body); // log the request body

    // Get the form data from the request
    //const formData = JSON.parse(req.body);

    // Save the form data to the database
    await FormData.create(req.body);

    // Send a response to the client indicating success
    res.json({ status: 'Success' });
  } catch (error) {
    console.error('Error occurred:', error); // log the error message
    // Send a response to the client indicating an error occurred
    res.status(400).json({ status: 'Error' });
  }
}



