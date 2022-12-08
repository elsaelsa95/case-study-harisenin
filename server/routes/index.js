const router = require("express").Router();

const routerAsset = require("./asset");
const routerCategory = require("./category");

router.use("/assets", routerAsset);

router.use("/categories", routerCategory);

module.exports = router;