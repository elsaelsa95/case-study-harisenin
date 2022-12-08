const { Asset } = require("./../models");

class Controller {
  static async create(req, res, next) {
    try {
      const { name, path, size } = req.body;
      const createAsset = await Asset.create({
        name,
        path,
        size,
      });
      res.status(201).json({
        message: `id:${createAsset.id}, name:${createAsset.name}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async list(req, res, next) {
    try {
      const findAllAssets = await Asset.findAll();
      if (!findAllAssets) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(findAllAssets);
      }
    } catch (error) {
      next(error);
    }
  }
  static async detail(req, res, next) {
    try {
      const { id } = req.params;

      const findAsset = await Asset.findByPk(id);

      if (!findAsset) {
        throw { name: "Data not found" };
      }
      res.status(200).json({ findAsset });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let findAsset = await Asset.findByPk(id);

      if (!findAsset) {
        throw { name: "Data not found" };
      } else {
        const { name, path, size } = req.body;
        findAsset = await Asset.update({ name, path, size }, { where: { id } });
      }
      res.status(200).json(`Asset with ${id} has been updated`);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      let findAsset = await Asset.findByPk(id);

      if (!findAsset) {
        throw { name: "Data not found" };
      } else {
        findAsset = await Asset.destroy({ where: { id } });
      }
      res.status(200).json(`Asset with ${id} has been deleted`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
