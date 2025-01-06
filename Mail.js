const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  transporter.sendMail({ from: 'your-email@gmail.com', to, subject, text }, (err, info) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Email sent', info });
    }
  });
});
