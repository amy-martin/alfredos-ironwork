const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));


 

app.post('/submit-inquiry', (req, res) => {
    const {name, email, service, message} = req.body
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})