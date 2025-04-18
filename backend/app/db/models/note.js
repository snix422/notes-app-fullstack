const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Pole tytuł jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Pole opis jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Pole kategoria jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
        lowercase: true
    },
    userId: {
        type: String | Number,
    }
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;