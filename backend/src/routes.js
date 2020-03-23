const {Router} = require("express");
const Task = require("./services/task");

const router = Router();

router.get("/task", Task.getAll);
router.post("/task", Task.create);
router.get("/task/:id", Task.getOne);
router.delete("/task/:id", Task.delete);
router.put("/task/:id", Task.update);

module.exports = router;
