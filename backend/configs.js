const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    service: 'icloud', // e.g., Gmail, Yahoo, etc.
    auth: {
        user: 'rudrasoni2023@icloud.com',
        pass: 'Radhe@2023'
    }
});

export const MY_MAIL = "rudrasoni2023@icloud.com"
