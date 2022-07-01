const { addGrocery } = require('../service');

const Grocery = require("../../../model/grocery");
const User = require("../../../model/user");

async function add(req, res) {
    try {
    
      const newGrocery = await addGrocery(req.body);
      // console.log('newGrocery =>', newGrocery);
  
      // use updateOne() 
      const updateUser = await User.updateOne(
        {
          _id: newGrocery.user
        },
        {
          $push: {
            groceries: newGrocery._id
          }
        }
      );
  
      return res.status(200).send(newGrocery);
    } 
    catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

module.exports = {
  add,
};