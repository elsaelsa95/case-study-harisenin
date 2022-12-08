const urlSlug = require("url-slug");
const { Category } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { categoryName, AssetId } = req.body;
      const createCategory = await Category.create({
        categoryName,
        categorySlug: urlSlug(categoryName),
        AssetId,
      });
      res.status(201).json({
        message: `id:${createCategory.id}, name:${createCategory.categoryName}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllCategories = await Category.findAll();
      if (!findAllCategories) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllCategories);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findCategory = await Category.findByPk(id);

      if (!findCategory) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findCategory });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findCategory = await Category.findByPk(id);

      if (!findCategory) {
        throw { name: "Data not found" };
      } else {
        const { categoryName, AssetId } = req.body;
        findCategory = await Category.update(
          { categoryName, categorySlug: urlSlug(categoryName), AssetId },
          { where: { id } }
        );
      }
      res.status(200).json(`Category with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findCategory = await Category.findByPk(id);

      if (!findCategory) {
        throw { name: "Data not found" };
      } else {
        findCategory = await Category.destroy({ where: { id } });
      }
      res.status(200).json(`Category with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
