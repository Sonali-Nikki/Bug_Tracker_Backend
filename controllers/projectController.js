import Project from "../models/Project.js";
import User from "../models/User.js";

// Create Project
export const createProject = async (req, res) => {
  const project = await Project.create({
    title: req.body.title,
    description: req.body.description,
    owner: req.user._id,
    teamMembers: [req.user._id],
  });

  res.status(201).json(project);
};

// Get User Projects
export const getProjects = async (req, res) => {
  const projects = await Project.find({
    teamMembers: req.user._id,
  }).populate("teamMembers", "name email");

  res.json(projects);
};

// Add Member
export const addMember = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const project = await Project.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  if (!project.teamMembers.includes(user._id)) {
    project.teamMembers.push(user._id);
    await project.save();
  }

  res.json(project);
};
