const Note = require("../db/models/note")
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
                userId: req.user.id
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
            const userId = req.user.id;
            const notes = await Note.find({ userId });
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: `Błąd serwera: ${error.message}` });
        }
    }
}

module.exports = new NoteController();