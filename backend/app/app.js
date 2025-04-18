const express = require("express");
const cors = require("cors")
const app = express();
const notesRoutes = require("./routes/notesRoutes");
const authRoutes = require("./routes/authRoutes");

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes)

module.exports = app;