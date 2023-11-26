const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name}, at ${db.host}:${db.port}`);
});



const MongoClient = require('mongodb').MongoClient;


const client = new MongoClient(process.env.DATABASE_URL), { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB instance
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB!');
    // Your application logic here
  }
});
