const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: "Brak uprawnień – dostęp tylko dla admina" });
    }
    next();
}

module.exports = isAdmin;