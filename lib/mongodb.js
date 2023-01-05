// Used to eatablish a connection with mongoDB atlast database.
import mongoose from "mongoose";

// Create a connection object
const connection = {};

// Connect to the MongoDB database
async function connect() {
  // If the connection is already established, return
  if (connection.isConnected) {
    return;
  }

  // Connect to the MongoDB database using the MONGODB_URI environment variable
  const db = await mongoose.connect(process.env.MONGODB_URI);

  // Set the isConnected flag on the connection object to true
  connection.isConnected = db.connections[0].readyState;
}

// Export the connect function
export default connect;

