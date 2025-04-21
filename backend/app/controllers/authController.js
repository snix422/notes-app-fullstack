const User = require("../db/models/user")
const { sessionSecretKey } = require("../config")
const jwt = require("jsonwebtoken");
const { sendRegistrationEmail } = require("../services/emailService");
class AuthController {
    async register(req, res) {
        const { email, password, name } = req.body;
        try {
            const userExist = await User.findOne({ email });
            if (userExist) {
                return res.status(400).json({ error: "Użytkownik już istnieje" });
            }
            const newUser = new User({ email, password, name });
            if (email.includes("admin")) {
                newUser.role = "admin"
            }
            await newUser.save();
            const token = jwt.sign({ userId: newUser._id, role: newUser.role }, sessionSecretKey, { expiresIn: "1h" });
            await sendRegistrationEmail(email, name)
            res.status(201).json({
                message: "Rejestracja zakończona sukcesem!",
                token,
            });
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Nieprawidłowe dane logowania" });
            }
            const isPasswordValid = await user.matchPassword(password);
            if (!isPasswordValid) {
                return res.status(400).json({ error: "Nieprawidłowe dane logowania" });
            }
            const token = jwt.sign({ userId: user._id, role: user.role }, sessionSecretKey, { expiresIn: "1h" });
            res.status(200).json({
                message: "Zalogowano pomyślnie",
                token,
                user: {
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            });
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` })
        }
    }
}

module.exports = new AuthController();