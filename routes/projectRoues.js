import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createProject,
  getProjects,
  addMember,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);
router.post("/:id/add-member", authMiddleware, addMember);

export default router;
