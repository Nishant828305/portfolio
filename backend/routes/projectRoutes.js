const express = require("express");
const router = express.Router();

const {
  getProjects,
  addProject,
  deleteProject,
  updateProject
} = require("../controllers/projectController");

router.get("/", getProjects);
router.post("/", addProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;