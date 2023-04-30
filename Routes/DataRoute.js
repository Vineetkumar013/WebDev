const express = require("express");
const {
  CreateData,
  UpdateData,
  DeleteData,
  getDataByID,
  getDataByPage,
} = require("../Controller/DataCtrl");
const router = express.Router();

router.post("/events", CreateData);
router.put("/events/:id", UpdateData);
router.delete("/events/:id", DeleteData);
router.get("/events", getDataByID);
router.get("/event", getDataByPage);

module.exports = router;
