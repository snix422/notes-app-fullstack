const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes)

module.exports = app;