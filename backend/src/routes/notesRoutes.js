import express from "express";
import {
  createAllNotes,
  getNoteById,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createAllNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
