const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: string,
        required: [true, "Pole tytuł jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
        lowercase: true
    },
    description: {
        type: string,
        required: [true, "Pole opis jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
        lowercase: true
    },
    category: {
        type: string,
        required: [true, "Pole kategoria jest wymagane"],
        minLength: [3, "Minimalna liczba znaków: 3"],
        trim: true,
        lowercase: true
    }
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;