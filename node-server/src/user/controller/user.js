const { getUsers, getById } = require('../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// importing user context
const User = require("../../../model/user");


// Register
async function register (req, res) {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input are required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        user_type: 0,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  // Our register logic ends here
};

// Login
async function login (req, res) {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    email.toLowerCase()
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
};

//Function to get all users
async function getAllUsers(req, res) {
  try {

    if (req.query.id) {
      const id = req.query.id;
      const result = await getById(id);
      // console.log('result of specific user =>', result);
      return res.send(result);
    }
    
    //Get specific user reffering to his email
    //To be corrected (if no such email in db it is returning [])
    if (req.query.email) {
      const user = await getByEmail(req.query.email);
      // console.log(user)
      return res.send(user);
    }

    const result = await getUsers();
    // console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    register,
    login,
    getAllUsers,
};