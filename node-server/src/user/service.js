const User = require('../../model/user');
const Grocery = require('../../model/grocery');

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

module.exports = {
    getUsers,
    getById,
    getByEmail,
    getGroceryById,
}
