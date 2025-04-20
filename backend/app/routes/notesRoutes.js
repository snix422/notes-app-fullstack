const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware")
const isAdmin = require("../middlewares/isAdmin")

router.get("/", authMiddleware, noteController.getUserNotes);
router.get("/user/:name", authMiddleware, isAdmin, noteController.getUserNotesByUserId)
router.get("/:id", authMiddleware, noteController.getNoteById)
router.post('/', authMiddleware, noteController.createNote)
router.delete("/:id", authMiddleware, noteController.removeNote)

module.exports = router;