import Ticket from "../models/Ticket.js";

// Create Ticket
export const createTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.status(201).json(ticket);
};

// Get Tickets by Project
export const getTickets = async (req, res) => {
  const tickets = await Ticket.find({
    projectId: req.params.projectId,
  }).populate("assignee", "name email");

  res.json(tickets);
};

// Update Ticket
export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(ticket);
};

// Delete Ticket
export const deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket deleted" });
};

// Filter Tickets
export const filterTickets = async (req, res) => {
  const { status, priority, assignee, search } = req.query;

  let query = { projectId: req.params.projectId };

  if (status) query.status = status;
  if (priority) query.priority = priority;
  if (assignee) query.assignee = assignee;

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  const tickets = await Ticket.find(query).populate(
    "assignee",
    "name"
  );

  res.json(tickets);
};
