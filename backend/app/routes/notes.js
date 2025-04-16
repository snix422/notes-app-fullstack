const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.get("/", noteController.getNotes);
router.get("/:id", noteController.getNoteById)
router.post('/', noteController.createNote)
router.delete("/:id", noteController.removeNote)

module.exports = router;