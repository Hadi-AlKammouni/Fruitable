const User = require('../../model/user');
const Grocery = require('../../model/grocery');
const Category = require('../../model/category');
const Review = require('../../model/review');
const Order = require('../../model/order');
const Element = require('../../model/element');

//Funtion called to get all users from db
async function getUsers() {
    return await User.find();
};

//Funtion called to get an user according to the id from db
async function getById(id) {
    return await User.findById(id);
}

//Funtion called to get an user according to the email from db
async function getByEmail(email) {
    var query = { "email": email };
    return await User.find(query);
}

async function getGroceryById(id) {
    return await Grocery.findById(id);
};

async function getCategories() {
    return await Category.find();
};
  
async function getCategoryById(id) {
    return await Category.findById(id);
};

async function getGroceryStock(id) {
    return await Grocery.findById(id);
};

async function addReview(body) {
    const {
      rates,
      reviews,
      user,
      grocery,
    } = body;
  
    const review = new Review({
      rates,
      reviews,
      user,
      grocery,
    });
  
    return await review.save();
};

async function addOrder(body) {
    const {
        price,
        user,
        grocery,
        element,
    } = body;
  
    const order = new Order({
        price,
        user,
        grocery,
        element,
    });
  
    return await order.save();
};

async function addElementToOrder(body) {
    const {
      order,
      item,
    } = body;
  
    const element = new Element({
      order,
      item,
    });
  
    return await element.save();
};

async function getOrder(id) {
    return await Order.findById(id);
};

module.exports = {
    getUsers,
    getById,
    getByEmail,
    getGroceryById,
    getCategories,
    getCategoryById,
    getGroceryStock,
    addReview,
    addOrder,
    addElementToOrder,
    getOrder,
}
