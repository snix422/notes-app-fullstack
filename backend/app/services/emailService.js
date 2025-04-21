const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD
    }
})

const sendRegistrationEmail = async(to, name) => {
    await transporter.sendMail({
        from: `${process.env.MAIL_USER}`,
        to,
        subject: "Rejestracja zakończona sukcesem",
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #4CAF50;">Cześć ${name}!</h2>
            <p>Dziękujemy za rejestrację w naszej aplikacji 🎉</p>
            <p>Jesteśmy bardzo szczęśliwi, że jesteś z nami.</p>
            <br />
        </div>
    `,
    });
};

module.exports = { sendRegistrationEmail }