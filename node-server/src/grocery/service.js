const Grocery = require('../../model/grocery');

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
    grocery_password,
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
    addGrocery,
  } 