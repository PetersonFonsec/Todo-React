const { Router } = require("express");
const Project = require("./services/Project");

const router = Router();

router.get("/project", Project.getAll);
router.post("/project", Project.create);
router.get("/project/:id", Project.getOne);
router.delete("/project/:id", Project.delete);
router.put("/project/:id", Project.update);

module.exports = router;
