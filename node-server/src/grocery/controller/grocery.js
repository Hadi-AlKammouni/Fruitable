const { addGrocery } = require('../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Grocery = require("../../../model/grocery");

// Register grocery logic
async function register (req, res) {
  
  try {
    // Get grocery input
    const { name, email, password, phone_number, location, picture, description } = req.body;
    
    // Validate grocery input
    if (!(email && password && name &&  phone_number && location && picture && description)) {
      res.status(400).send("All input are required");
    }
    
    // Validate if grocery exist in our database
    const oldGrocery = await Grocery.findOne({ email });

    if (oldGrocery) {
      return res.status(409).send("Grocery Already Exist. Please Login");
    }
    
    // Encrypt grocery password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create grocery in our database
    const grocery = await Grocery.create({
      name,
      email: email.toLowerCase(), // Sanitize: convert email to lowercase
      password: encryptedPassword,
      phone_number,
      location,
      picture,
      description,
    });
    
    // Create token
    const token = jwt.sign(
      { grocery_id: grocery._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // Save grocery token
    grocery.token = token;

    // Return new grocery
    res.status(201).json(grocery);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

// Login grocery logic
async function login (req, res) {

  try {
    // Get grocery input
    const { email, password } = req.body;

    // Validate grocery input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    email.toLowerCase()
    // Validate if grocery exist in our database
    const grocery = await Grocery.findOne({ email });
    
    if (grocery && (await bcrypt.compare(password, grocery.password))) {
      // Create token
      const token = jwt.sign(
        { grocery_id: grocery._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      
      // Save grocery token
      grocery.token = token;
      
      // Return grocery
      res.status(200).json(grocery);
    }else{
      res.status(400).send("Invalid Credentials - Wrong email and/or password");
    }
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
};

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
  register,
  login,
  add,
};