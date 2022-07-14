const faker = require('faker');
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    let index;
    for (index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newItem = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newItem);
    return newItem;
  }

  async find() {
    const query = 'SELECT * FROM task';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products[index] = {
        ...this.products[index],
        ...changes,
      };
      return this.products[index];
    }
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products.slice(index, 1);
      return { id };
    }
  }
}

module.exports = ProductService;
