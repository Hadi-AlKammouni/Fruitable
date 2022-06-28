const User = require('../../model/user');

//Funtion called to get all users from db
async function getUsers() {
    return await User.find();
};

//Funtion called to get an user according to the id from db
async function getById(id) {
    return await User.findById(id);
}

module.exports = {
    getUsers,
    getById,
}
