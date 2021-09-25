const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    emailId: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Home = mongoose.model('customerDetails', contactSchema);

module.exports = Home;

