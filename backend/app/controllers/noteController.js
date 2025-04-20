const Note = require("../db/models/note")
const User = require("../db/models/user")
const mongoose = require("mongoose")
class NoteController {
    async getNotes(req, res) {
        try {
            const notes = await Note.find();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera : ${error.message}` })
        }
    }

    async getNoteById(req, res) {
        try {
            const note = await Note.findOne({ _id: req.params.id })
            res.status(200).json(note);
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` })
        }
    }

    async createNote(req, res) {
        try {
            const { title, description, category } = req.body
            const newNote = {
                title: title,
                description: description,
                category: category,
                userId: req.user.userId
            }

            await Note.create(newNote);
            res.status(201).json({ data: "Notatka dodana pomyślnie" })
        } catch (error) {
            res.status(500).json({ error: `Błąd : ${error.message}` })
        }
    }

    async removeNote(req, res) {
        try {
            const note = await Note.findOne({ _id: req.params.id });
            if (!note) {
                return res.status(404).json({ error: "Notatka nie znaleziona" });
            }
            await Note.deleteOne(note);
            res.status(200).json({ message: "Notatka usunięta pomyślnie" });
        } catch (error) {
            res.status(500).json({ error: `Błąd : ${error.message}` })
        }
    }

    async getUserNotes(req, res) {
        try {
            const userId = req.user.userId;
            console.log(req.user);
            /*if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).json({ error: "Nieprawidłowy identyfikator użytkownika" });
            }
            const objectId = mongoose.Types.ObjectId(userId);*/
            const userExists = await User.findOne({
                _id: userId
            });

            if (!userExists) {
                return res.status(404).json({ error: "Użytkownik nie istnieje" });
            }

            const notes = await Note.find({ userId });
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` });
        }
    }

    async getUserNotesByUserId(req, res) {
        try {
            const { name } = req.params;
            const userExists = await User.findOne({ name });

            if (!userExists) {
                return res.status(404).json({ error: "Użytkownik nie istnieje" });
            }

            const notes = await Note.find({ userId: userExists._id })
            res.status(200).json(notes)
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` })
        }

    }
}

module.exports = new NoteController();