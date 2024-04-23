const express = require("express")
const bodyParser = require('body-parser');
const path = require("path")
const nodemailer = require('nodemailer');

const app = express();



const MY_MAIL = "rudrasoni2023@icloud.com"



// Body parser middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

app.post('/submit-form', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // e.g., Gmail, Yahoo, etc.
        auth: {
            user: 'rudrasoni6080@gmail.com',
            pass: "maww dkyi ezgz ljas"
        }
    });

    console.log("req body ==>>", req.body, transporter)
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: MY_MAIL,
        subject: 'New Message from Portfolio Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending message');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


