export const canEditTicket = (req, res, next) => {
  if (!req.user)
    return res.status(403).json({ message: "Forbidden" });

  next();
};
