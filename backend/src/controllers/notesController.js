export const getAllNotes = (req, res) => {
  res.status(200).send("You got 51 notes");
};

export const createAllNotes = (req, res) => {
  res.status(201).json({ message: "Note created " });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note updated" });
};

export const deleteNote = (req, res) => {
  res.send(200).json({ message: "Note Deleted" });
};
