const Data = require("../Model/DataModel");

const CreateData = async (req, res) => {
  try {
    const newEvents = await Data.create(req.body);
    res.status(200).json(newEvents);
  } catch (error) {
    console.log("Something went wrong in CreateData", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getDataByID = async (req, res) => {
  const eventId = req.query.id;
  try {
    const event = await Data.findById(eventId);
    res.json(event);
  } catch (error) {
    console.error("Error retrieving event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

  // const snippets = SnippetModel
	// 	.find(conditions)
	// 	.skip((+req.query.page - 1) * 10)
	// 	.limit(5)

const getDataByPage = async (req, res) => {
  try {
    const { type = "Event", limit = 5, page = 1 } = req.query;
    const sortOrder = type === "Event" ? -1 : 1;
    const totalEvents = await Data.countDocuments();
    const totalPages = Math.ceil(totalEvents / limit);
    const skip = (page - 1) * limit;
    const eventsOnPage = await Data.find()
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limit);
    res.json({ events: eventsOnPage, totalPages });
  } catch (error) {
    console.error("Error retrieving events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const UpdateData = async (req, res) => {
  const id = req.params.id;
  try {
    const updateData = await Data.findByIdAndUpdate({ _id: id }, req.body);
    res.json(updateData);
  } catch (error) {
    console.error("Error retrieving events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const DeleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const DeleteData = await Data.findOneAndDelete({ _id: id }, req.body);
    res.json(DeleteData);
  } catch (error) {
    console.error("Error retrieving events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  CreateData,
  getDataByID,
  getDataByPage,
  UpdateData,
  DeleteData,
};

// const getDataByPage = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page || 1, 5);
//     const limit = parseInt(req.query.limit || 5, 5);
//     const offset = (page - 1) * limit;
//     const eventsOnPage = events.slice(offset, offset + limit);
//     res.json(eventsOnPage);
//   } catch (error) {}
// };
