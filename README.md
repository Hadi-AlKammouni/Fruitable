<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/Hadi-AlKammouni/Fruitable_Applictaion#-project-philosophy) • [WIREFRAMES](https://github.com/Hadi-AlKammouni/Fruitable_Applictaion#-wireframes) • [TECH STACK](https://github.com/Hadi-AlKammouni/Fruitable_Applictaion#-tech-stack) • [IMPLEMENTATION](https://github.com/Hadi-AlKammouni/Fruitable_Applictaion#-impplementation) • [HOW TO RUN?](https://github.com/Hadi-AlKammouni/Fruitable_Applictaion#-how-to-run)**
</div>

<br><br>


<img src="./readme/title2.svg" id="-project-philosophy"/>

>(Frui)t + Vege(table) => Fruitable 😋

> Fruitable is all what you need to make grocery shopping easy and time saving.
The app is made to locate the nearby groceries that carries the goods you're looking for. With every purchase, a delivery tracking system is triggered to assist you in keeping track of your order.
> 
> Fruitable is a tool designed also for grocery store owners, allowing them to input their data and display their products to customers. Owners can communicate with one another via the website's chat feature.

### User Stories
- As a user, I want to own an account and login whenever I want.
- As a user, I want to view the nearest groceries.
- As a user, I want to fill and modify my cart.
- As a user, I want to get notified upon ordering.
- As a user, I want to view others reviews.
- As a user, I want to submit a grocery review.
- As a user, I want toedit my account.
- As a user, I want to track my order. 
(Please note that this feature is implemented but not functional yet due to lack of GOOGLE_API_KEY)

### Seller Stories
- As a seller, I want to register using new technology: optical character recognition.
- As a seller, I want to make a real time chat with other stores.
- As a seller, I want to login into my account andadd items to my stock.
- As a seller, I want to modify my stock.
- As a seller, I want to edit my account.
- As a seller, I want to manage user's orders.

<br><br>

<img src="./readme/title3.svg" id="-wireframes"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules
<br>
(Please note that pictures make take few seconds to open due to high quality)

# User Mobile App Wireframes

| Grocery  | Stock  | My Cart  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-grocery.png" /> | <img src="./readme/wireframes/user/user-items.png"/> | <img src="./readme/wireframes/user/user-cart.png"/> |

| Splash Screen  | Login  | Account  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-splash.png"/> | <img src="./readme/wireframes/user/user-login.png"/> | <img src="./readme/wireframes/user/user-account.png"/> |

| Signup One  | Signup Two  | Signup Three  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-signup-one.png"/> | <img src="./readme/wireframes/user/user-signup-two.png"/> | <img src="./readme/wireframes/user/user-signup-three.png"/> |

| Home  | Track  |
| -----------------| -----|
| <img src="./readme/wireframes/user/user-home.png"/> | <img src="./readme/wireframes/user/user-track.png"/> |

# Seller Web Wireframes

| Reviews  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-reviews.png"/> |

| Add to Stock  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-add-to-stock.png"/> |

| View Stock  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-view-stock.png"/> |

| Edit Account  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-edit-the-account.png"/> |

| Manage Orders  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-the-manage-orders.png"/> |

| Login  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-login.png"/> |

| Manage Orders  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-signup.png"/> |


<br><br>

<img src="./readme/title4.svg" id="-tech-stack"/>

Here's a brief high-level overview of the tech stack the Fruitable app uses:

- This project uses the [React app development framework](https://reactjs.org/). React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- In addition to [React native framework](https://reactnative.dev/). React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.
- To send remote push notifications, the project uses the [firebase_cloud_messaging](https://firebase.google.com/products/cloud-messaging/) package which provides a reliable and battery-efficient connection between your server and devices that allows you to deliver and receive messages and notifications on iOS, Android, and the web at no cost!
- The project uses ["Socket package"](https://socket.io/) to implement the real time chat feature, where socket package creates the communication channel, and the channel is used to send data between application programs either locally or over networks.

<br>

- For persistent storage (database), the project uses the [MongoDB](https://www.mongodb.com/) which is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 
- ["Node.js"](https://dev.co/node-js/) was used as backend of this project. Where Node.jsis an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. 
- ["Express.js"](http://expressjs.com/), or simply Express, was used with the help of Node.js to build the required APIs. Express is a back end web application framework for Node.js, released as free and open-source software under the MIT License.

<br><br>
<img src="./readme/title5.svg" id="-impplementation"/>

> Uing the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

>Please note that the following are gifs and may take few seconds to open

<br>

# User Mobile App Implementation

| Sign up (1+2+3)  | Login  |
| -----------------| -----|
| <img src="./readme/user/user-signup-logout.gif"/> | <img src="./readme/user/user-login+viewnearby.gif"/> |

| View Grocery From Card or Marker  | View Recent Reviews  |
| -----------------| -----|
| <img src="./readme/user/user-view-grocery-by-card-or-marker.gif"/> | <img src="./readme/user/user-view-recent-reviews.gif"/> |

| Submit Review  | Firebase Notification After Making an Order  |
| -----------------| -----|
| <img src="./readme/user/user-submit-review.gif"/> | <img src="./readme/user/user-add-remove-notify.gif"/> |

| Update Account  | Try to Order From Another Grocery  |
| -----------------| -----|
| <img src="./readme/user/update-account.gif"/> | <img src="./readme/user/user-order-from-another-grocery.gif"/> |

<br>

# Seller Web Implementation

| Optical Character Recognition Technology Registration
| -----------------|
| <img src="./readme/seller/seller-register-logout.gif"/>

| Socket Real Time Chat
| -----------------|
| <img src="./readme/seller/seller-chat.gif"/> 

| Add to Stock
| -----------------|
| <img src="./readme/seller/seller-add-item.gif"/> 

| Manage Orders
| -----------------|
| <img src="./readme/seller/seller-manage-orders.gif"/> 

| Edit Item
| -----------------|
| <img src="./readme/seller/seller-edit-stock.gif"/> 

| Remove Item
| -----------------|
| <img src="./readme/seller/seller-remove-item.gif"/> 

| Update Account
| -----------------|
| <img src="./readme/seller/seller-udpate-account.gif"/> 

| Login
| -----------------|
| <img src="./readme/seller/seller-login.gif"/> 


<br><br>
<img src="./readme/title6.svg" id="-how-to-run"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/Hadi-AlKammouni/Fruitable_Applictaion.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To run a folder
   ```
   npm start
   ```
4. Firebase notification API_KEY in .env file for react native folder
   ```js
   Firebase_API_KEY = 'Enter The API KEY';
   ```

