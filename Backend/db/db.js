const mongoose = require('mongoose');

function connectToDB() {
  // MongoDB connection using environment variable or default fallback
  const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/testDB';

  mongoose
    .connect(DB_URI, { })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));
}

module.exports = connectToDB;
