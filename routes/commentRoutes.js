import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addComment,
  getComments,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/:ticketId", authMiddleware, addComment);
router.get("/:ticketId", authMiddleware, getComments);

export default router;
