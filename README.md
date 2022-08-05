<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](#-project-philosophy) • [WIREFRAMES](#-wireframes) • [TECH STACK](#-tech-stack) • [IMPLEMENTATION](#-impplementation) • [HOW TO RUN?](#-how-to-run)**
</div>

<br><br>


<img src="./readme/title2.svg" id="-project-philosophy"/>


>(Frui)t + Vege(table) => Fruitable 😋
>
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
- As a user, I want to edit my account.
- As a user, I want to track my order. 
(Please note that this feature is implemented but not functional yet due to missing GOOGLE_API_KEY)

### Seller Stories
- As a seller, I want to register using new technology: optical character recognition (OCR).
- As a seller, I want to make a real time chat with other stores.
- As a seller, I want to login into my account and add items to my stock.
- As a seller, I want to modify my stock.
- As a seller, I want to edit my account.
- As a seller, I want to manage users' orders.

<br><br>

<img src="./readme/title3.svg" id="-wireframes"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules
<br>
(Please note that pictures make take few seconds to open due to high quality)

### User Mobile App Wireframes 📱

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

### Seller Web Wireframes 💻

| Reviews  | Add to Stock  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-reviews.png"/> | <img src="./readme/wireframes/seller/seller-add-to-stock.png"/> |

| View Stock  | Edit Account  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-view-stock.png"/> | <img src="./readme/wireframes/seller/seller-edit-account.png"/> |

| Signup  | Login  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-signup.png"/> | <img src="./readme/wireframes/seller/seller-login.png"/> |

| Manage Orders  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-manage-orders.png"/> |


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

> Using the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app
<br>
(Please note that the following are gifs and may take few seconds to open)

<br>

### User Mobile App Implementation 📱

| Signup One   | Signup Two  | Signup Three  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-signup-step-one.gif"/> | <img src="./readme/gifs/user/user-signup-step-two.gif"/> | <img src="./readme/gifs/user/user-signup-step-three.gif"/> |

| Login   | View Nearby Groceries  | Logout  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-login.gif"/> | <img src="./readme/gifs/user/user-view-nearby-groceries.gif"/> | <img src="./readme/gifs/user/user-logout.gif"/> |

| View Grocery From Marker or Card   | View Recent Reviews | Submit Review  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-view-grocery-from-marker-or-card.gif"/> | <img src="./readme/gifs/user/user-view-recent-reviews.gif"/> | <img src="./readme/gifs/user/user-submit-review.gif"/> |

| Update Profile   | Add Item to Cart | Remove Item From Cart  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-update-profile.gif"/> | <img src="./readme/gifs/user/user-add-to-order.gif"/> | <img src="./readme/gifs/user/user-remove-from-order.gif"/> |

| Try to Over-Ride Existing Order   | Firebase Notification Upon Making an Order  |
| -----------------|-----|
| <img src="./readme/gifs/user/user-override-old-order.gif"/> | <img src="./readme/gifs/user/user-firebase-notification-upon-ordering.gif"/> |

<br>

### Seller Web Implementation 💻

| Optical Character Recognition Technology Registration
| -----------------|
| <img src="./readme/gifs/seller/seller-ocr-registration.gif"/>

| Socket Real Time Chat
| -----------------|
| <img src="./readme/gifs/seller/seller-socket-chat.gif"/> 

| Add Item to Stock |
| -----------------|
| <img src="./readme/gifs/seller/seller-add-item-to-stock.gif"/> |

| Manage Orders
| -----------------|
| <img src="./readme/gifs/seller/seller-manage-orders.gif"/> 

| Edit Stock
| -----------------|
| <img src="./readme/gifs/seller/seller-edit-stock.gif"/> 

| Remove Item From Stock
| -----------------|
| <img src="./readme/gifs/seller/seller-remove-item-from-stock.gif"/> 

| Update Account
| -----------------|
| <img src="./readme/gifs/seller/seller-update-account.gif"/> 

| Login
| -----------------|
| <img src="./readme/gifs/seller/seller-login.gif"/> 

| Logout
| -----------------|
| <img src="./readme/gifs/seller/seller-logout.gif"/> 

| View Users' Reviews
| -----------------|
| <img src="./readme/gifs/seller/seller-view-users-reviews.gif" jus/> 

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
   git clone https://github.com/Hadi-AlKammouni/Fruitable.git
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

