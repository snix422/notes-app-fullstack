const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes")

app.use(express.json())
app.use("/api/notes", notesRoutes)

module.exports = app;