const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const path = require('path')

const conn = require('../../utility/connectdb')

const userroute = require('../../routes/user_route')
const employeeroute = require('../../routes/employee_route')
const productroute = require('../../routes/product_route')
const categoryroute = require('../../routes/category_route')
const orderroute = require('../../routes/order_route')
const cartroute = require('../../routes/cart_route')
const app = express();
const router = express.Router();
conn();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, 'assets')))
app.use(cors());
app.use(express.json());
const port = 2000;

// Example check route
router.get('/ping', (req, res) => {
  res.json({ message: 'pong ✅ from  Netlify serverless Express' });
});

// app.use('/', userroute);
// app.use('/', employeeroute);
// app.use('/', productroute);
// app.use('/', categoryroute);
// app.use('/', orderroute);
// app.use('/', cartroute);
// app.use('/.netlify/functions/index', router);


router.use('/', userroute);
router.use('/', employeeroute);
router.use('/', productroute);
router.use('/', categoryroute);
router.use('/', orderroute);
router.use('/', cartroute);
app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);







// const express = require('express');
// const serverless = require('serverless-http');

// const app = express();
// const router = express.Router();

// // Example route
// router.get('/ping', (req, res) => {
//   res.json({ message: 'pong from Express!' });
// });

// // Use the router
// app.use('/.netlify/functions/index', router);

// module.exports.handler = serverless(app);
