const Grocery = require('../../model/grocery');
const Item = require("../../model/item");
const Order = require('../../model/order');

const bcrypt = require('bcryptjs');

async function addNewItem(body) {
  const {
    name,
    price,
    quantity,
    picture,
    category,
    grocery,
  } = body;

  const item = new Item({
    name,
    price,
    quantity,
    picture,
    category,
    grocery,
  });

  return await item.save();
};

async function getGroceryStock(id) {
  return await Grocery.findById(id);
};

async function getGroceryItem(id) {
  return await Item.findById(id);
};

async function getOrder(id) {
  return await Order.findById(id);
};

async function getOrderElement(id) {
  return await Element.findById(id);
};

module.exports = {
    addNewItem,
    getGroceryStock,
    getGroceryItem,
    getOrder,
    getOrderElement,
} 