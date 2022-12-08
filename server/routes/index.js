const router = require("express").Router();

const routerAsset = require("./asset");
const routerCategory = require("./category");
const routerProduct = require("./product")
const routerProductAsset = require("./productAsset")

router.use("/assets", routerAsset);

router.use("/categories", routerCategory);

router.use("/products", routerProduct)

router.use("/productAsset", routerProductAsset)

module.exports = router;