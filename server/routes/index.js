const router = require("express").Router();

const routerAsset = require("./asset");
const routerCategory = require("./category");
const routerProduct = require("./product")

router.use("/assets", routerAsset);

router.use("/categories", routerCategory);

router.use("/products", routerProduct)

module.exports = router;