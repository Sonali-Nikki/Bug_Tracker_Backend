import express from "express";
import authMiddleware, { isAdmin } from "../middleware/authMiddleware.js";
import {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  filterTickets,
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", authMiddleware, createTicket);
router.get("/:projectId", authMiddleware, getTickets);
router.put("/:id", authMiddleware, updateTicket);
router.delete("/:id", authMiddleware, isAdmin, deleteTicket);
router.get("/filter/:projectId", authMiddleware, filterTickets);

export default router;
