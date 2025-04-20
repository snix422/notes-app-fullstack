const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Brak tokena autoryzacyjnego" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SESSION_KEY_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Nieprawidłowy token" });
    }
};

module.exports = authMiddleware;