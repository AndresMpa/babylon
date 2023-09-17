const faker = require('faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {}

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      await models.Product.create({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        description: faker.lorem.paragraph(),
        categoryId: 1,
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {},
    };

    const { limit, offset, price, price_min, price_max } = query;

    if (limit && offset) {
      options.offset = offset;
      options.limit = limit;
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.between]: [price_min, price_max],
      };
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const res = await product.update(changes);
    return res;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
