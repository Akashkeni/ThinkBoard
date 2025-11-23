import express from "express";
import {
  createAllNotes,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createAllNotes);
router.put("/:id", updateNote);
router.delete(":id", deleteNote);

export default router;
