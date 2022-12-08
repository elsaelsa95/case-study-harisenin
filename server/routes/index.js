const router = require("express").Router();

const routerAsset = require("./asset");

router.use("/assets", routerAsset);

module.exports = router;