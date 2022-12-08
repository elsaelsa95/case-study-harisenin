const { ProductAsset } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { AssetId, ProductId, CategoryId } = req.body;
      const createProductAsset = await ProductAsset.create({
        AssetId,
        ProductId,
        CategoryId,
      });
      res.status(201).json({
        message: `id:${createProductAsset.id}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllProductAsset = await ProductAsset.findAll();
      if (!findAllProductAsset) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllProductAsset);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findProductDetail = await ProductAsset.findByPk(id);

      if (!findProductDetail) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findProductDetail });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findProductAsset = await ProductAsset.findByPk(id);

      if (!findProductAsset) {
        throw { name: "Data not found" };
      } else {
        const { cAssetId, ProductId, CategoryId } = req.body;
        findProductAsset = await ProductAsset.update(
          { AssetId, ProductId, CategoryId },
          { where: { id } }
        );
      }
      res.status(200).json(`ProductAsset with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findProductAsset = await ProductAsset.findByPk(id);

      if (!findProductAsset) {
        throw { name: "Data not found" };
      } else {
        findProductAsset = await ProductAsset.destroy({ where: { id } });
      }
      res.status(200).json(`ProductAsset with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
