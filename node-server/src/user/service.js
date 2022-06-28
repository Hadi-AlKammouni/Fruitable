const User = require('../../model/user');

//Funtion called to get all users from db
async function getUsers() {
    return await User.find();
};

module.exports = {
    getUsers,
}
