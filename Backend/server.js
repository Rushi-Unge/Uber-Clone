const http = require('http');
const dotenv = require('dotenv');
const app = require('./app'); // Import your Express app
const connectToDB = require('./db/db'); // Import DB connection function

dotenv.config(); // Load environment variables from .env file

const port = process.env.PORT || 3000;

// Connect to MongoDB
connectToDB();

// Create the HTTP server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
