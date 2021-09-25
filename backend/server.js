const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', require('./routes/home'));

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

connectDB();

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

