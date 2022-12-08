const router = require("express").Router();
const Controller = require("./../controller/category");

router.post("/", Controller.create);
router.get("/", Controller.list);
router.get("/:id", Controller.detail);
router.put("/:id", Controller.edit);
router.delete("/:id", Controller.delete);

module.exports = router;
