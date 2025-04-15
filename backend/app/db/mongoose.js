const mongoose = require("mongoose");
const { database } = require("../config");

mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Połączono z bazą danych MongoDB!");
    })
    .catch((err) => {
        console.error("❌ Błąd połączenia z MongoDB:", err);
    });