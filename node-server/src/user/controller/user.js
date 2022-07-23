const { getUsers, getById, getByEmail, getGroceryById, getGroceryItem, addOrder, getOrder } = require('../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Importing user context
const User = require("../../../model/user");
const Grocery = require('../../../model/grocery');
const Order = require('../../../model/order');

// Register logic
async function register (req, res) {

  try {
    // Get user input
    const { first_name, last_name, email, password, gender, latitude, longitude, profile_picture } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name && gender && latitude && longitude &&  profile_picture)) {
      res.status(400).send("All input are required");
    }

    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // Sanitize: convert email to lowercase
      password: encryptedPassword,
      user_type: 0,
      gender,
      latitude,
      longitude,
      profile_picture,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      // {
      //   expiresIn: "2h",
      // }
    );
    // Save user token
    user.token = token;

    // Return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

// Login logic
async function login (req, res) {

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
        // {
        //   expiresIn: "2h",
        // }
      );

      // Save user token
      user.token = token;

      // Return user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials - Wrong email and/or password");
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
};

// View grocery(ies) logic
async function viewGroceries(req, res) {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = await getGroceryById(id);
      return res.send(result);
    }

    const result = await Grocery.find()
    
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
};

// View grocery item logic
async function viewItem(req, res) {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = await getGroceryItem(id);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
};

// Update grocery profile logic
async function updateProfile(req, res) {
  try {
    const user = await User.findByIdAndUpdate( { _id: req.query.id } ,{
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        location: req.body.location,
        profile_picture: req.body.profile_picture,
      },
    });
    
    return res.send("Profile Successfully Updated");
  } catch (error) {
    console.log(error);
  }
};

// Review + rate grocery logic
async function reviewGrocery(req, res) {
  try {
    const request = req.body;
    const user_rating = request.rate;
    const user_raveiw = request.text;
    const user_id = request.user;
    const grocery = request.grocery;
    const first_name = request.first_name;

    // use updateOne() to update groceries collection 
    const updateGrocery = await Grocery.updateOne(
      {
        _id: grocery
      },
      {
        $push: {
          reviews: { 
            rate: user_rating, 
            text: user_raveiw, 
            first_name: first_name, 
            user: user_id 
          } 
        },
      }
    );

    return res.status(200).send("Review successfully added");
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Create order logic
async function createOrder(req, res) {
  try {
    const order = await addOrder(req.body);

    // use updateOne() to update users collection
    const updateUser = await User.updateOne(
      {
        _id: order.user
      },
      {
        $push: {
          orders: order._id
        }
      }
    );

    // use updateOne() to update groceries collection 
    const updateGrocery = await Grocery.updateOne(
      {
        _id: order.grocery
      },
      {
        $push: {
          orders: order._id
        }
      }
    );

    return res.status(200).send(order);
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Add element to order logic
async function addToOrder(req, res) {
  try {
    const request = req.body;
    const name = request.name;
    const price = request.price;
    const picture = request.picture;
    const order = request.order;

    // use updateOne() to update orders collection
    const updateOrder = await Order.updateOne(
      {
        _id: order
      },
      {
        $push: {
          items: {
            name: name,
            price: price,
            picture: picture,
          }
        }
      }
    );

    return res.status(200).send("Item added to your recent order");
  } 
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// View cart logic
async function viewCart(req, res) {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const result = await getOrder(id);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
};

// Find nearby groceries logic
async function findNearbyGroceries(req, res){
  try{
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const nearbyGrocery = await Grocery.aggregate([
      {
        $geoNear:{
          near:{type:"Point",coordinates:[parseFloat(longitude),parseFloat(latitude)]},
          key:"location",
          maxDistance:2000,
          distanceField:"dist.calculated",
          spherical:true
        }
      }
    ]);

    res.status(200).send(nearbyGrocery)

  } catch(error){
    console.log(error);
  }
};

//Function to get all users
async function get(req, res) {
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
};

//Authenticating the user
async function auth (req, res) {
  res.status(200).send("Welcome 🙌 ");
};

module.exports = {
    register,
    login,
    get,
    auth,
    viewGroceries,
    viewItem,
    updateProfile,
    reviewGrocery,
    createOrder,
    addToOrder,
    viewCart,
    findNearbyGroceries,
};