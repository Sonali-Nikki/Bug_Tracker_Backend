import Ticket from "../models/Ticket.js";

//  Create Ticket
export const createTicket = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("PROJECT ID:", req.body.projectId);

  const { title, priority, projectId } = req.body;

if (!projectId || projectId === "undefined") {
  return res.status(400).json({ message: "Project ID is required" });
}


  const ticket = await Ticket.create({
    title,
    priority,
    projectId,
    createdBy: req.user._id,
  });

  res.status(201).json(ticket);
};


// Get Tickets by Project
export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({
      projectId: req.params.projectId,
    })
      .populate("assignee", "name email")
      .sort({ createdAt: -1 });

    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Ticket
export const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete Ticket
export const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ message: "Ticket deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Filter Tickets
export const filterTickets = async (req, res) => {
  try {
    const { status, priority, assignee, search } = req.query;

    let query = { projectId: req.params.projectId };

    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (assignee) query.assignee = assignee;
    if (search) query.title = { $regex: search, $options: "i" };

    const tickets = await Ticket.find(query).populate("assignee", "name");
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
