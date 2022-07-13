const User = require('../../model/user');
const Grocery = require('../../model/grocery');
const Review = require('../../model/review');
const Order = require('../../model/order');
const Item = require('../../model/item');

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

async function getGroceryItem(id) {
    return await Item.findById(id);
};

async function addReview(body) {
    const {
      rates,
      text,
      user,
      grocery,
    } = body;
  
    const review = new Review({
      rates,
      text,
      user,
      grocery,
    });
  
    return await review.save();
};

async function addOrder(body) {
    const {
        total_price,
        user,
        grocery,
    } = body;
  
    const order = new Order({
        total_price,
        user,
        grocery,
    });
  
    return await order.save();
};

async function getOrder(id) {
    return await Order.findById(id);
};

async function getElement(id) {
    return await Element.findById(id);
};

module.exports = {
    getUsers,
    getById,
    getByEmail,
    getGroceryById,
    getGroceryItem,
    addReview,
    addOrder,
    getOrder,
    getElement,
}
