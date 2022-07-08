const Grocery = require('../../model/grocery');
const Category = require('../../model/category');
const bcrypt = require('bcryptjs');

async function addNewCategory(body) {
  const {
    name,
    picture,
  } = body;

  const category = new Category({
    name,
    picture,
  });

  return await category.save();
};

async function addGrocery(body) {
  const {
    grocery_name,
    grocery_email,
    grocery_password,
    grocery_phone_number,
    grocery_location,
    grocery_picture,
    grocery_description,
    grocery_category,
    grocery_state,
    user,
  } = body;

  const grocery = new Grocery({
    grocery_name,
    grocery_email,
    grocery_password: await bcrypt.hash(grocery_password, 10),
    grocery_phone_number,
    grocery_location,
    grocery_picture,
    grocery_description,
    grocery_category,
    grocery_state,
    user,
  });

  return await grocery.save();
}

module.exports = {
    addNewCategory,
    addGrocery,
} 