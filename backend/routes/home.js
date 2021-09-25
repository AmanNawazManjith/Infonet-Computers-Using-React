const router = require('express').Router();
let Home = require('../models/contactUs.model');

router.route('/').get((req, res) => {
    Home.find()
        .then(home => res.json(home))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/home').post((req, res) => {
    const username = req.body.username;
    const emailId = req.body.emailId;
    const phoneNumber = Number(req.body.phoneNumber);
    const description = req.body.description;

    const newContact = new Home({
        username,
        emailId,
        phoneNumber,
        description
    });
    
    newContact.save()
        .then(() => res.json('Your response has been submitted!'))
        .catch(err => res.status(400).json('Error :'+err));

});

router.route('/laptops').get((req, res) => {
    Laptop.find()
        .then(laptop => res.json(laptop))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;