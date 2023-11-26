const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL;

mongoose.connect(uri);

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name}, at ${db.host}:${db.port}`);
});

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB instance
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB!');
    // Your application logic here
  }
});
