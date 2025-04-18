const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware")
const isAdmin = require("../middlewares/isAdmin")

router.get("/", authMiddleware, isAdmin, noteController.getNotes);
router.get("/:id", authMiddleware, noteController.getNoteById)
router.post('/', authMiddleware, noteController.createNote)
router.delete("/:id", authMiddleware, noteController.removeNote)

module.exports = router;