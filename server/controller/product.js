const urlSlug = require("url-slug");
const { Product } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { productName, price, description } = req.body;
      const createProduct = await Product.create({
        productName,
        productSlug: urlSlug(productName),
        price,
        description,
      });
      res.status(201).json({
        message: `id:${createProduct.id}, name:${createProduct.productName}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllProducts = await Product.findAll();
      if (!findAllProducts) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllProducts);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findProduct = await Product.findByPk(id);

      if (!findProduct) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findProduct });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findProduct = await Product.findByPk(id);

      if (!findProduct) {
        throw { name: "Data not found" };
      } else {
        const { productName, price, description } = req.body;
        findProduct = await Product.update(
          {
            productName,
            productSlug: urlSlug(productName),
            price,
            description,
          },
          { where: { id } }
        );
      }
      res.status(200).json(`Product with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findProduct = await Product.findByPk(id);

      if (!findProduct) {
        throw { name: "Data not found" };
      } else {
        findProduct = await Product.destroy({ where: { id } });
      }
      res.status(200).json(`Product with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
