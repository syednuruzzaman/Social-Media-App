import { MongoClient } from 'mongodb';

// Define your connection URL
const url: string = 'mongodb://localhost:27017/myDatabase';


// Extend MongoClientOptions to include useUnifiedTopology
interface MyMongoClientOptions {
  useUnifiedTopology?: boolean;
}

// Define additional options if needed
const options: MyMongoClientOptions = {
  useUnifiedTopology: true, // This is recommended to use
  // Add other options here as needed
};

// Create a new MongoClient
const client: MongoClient = new MongoClient(url, options as any); // Type assertion to bypass type check

// Define an async function to connect to the database
async function connectToDatabase(): Promise<void> {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to the database');

    // Perform database operations here if needed

  } catch (error) {
    console.error('Connection to the database failed:', error);
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();

// Export the client for use in other parts of your application
export default client;
