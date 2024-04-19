// const express = require('express');

// const app = express();
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const { conn, sql } = require('./connectdb/connectdb');
// // const routes = require('./routes');
// // const bodyParser = require('body-parser');
// dotenv.config();
// const port = process.env.PORT || 3001;

// // các route
// app.get('/', (req, res) => {
//     res.send("hello world! hihiiiiii")
// });

// // var prdRoute = require('./routes/ProductRoute');
// // prdRoute(app);
// //hoặc
// require('./routes/ProductRoute')(app);

// // mở cổng server
// app.listen(3001, () => {
//     console.log("Ứng dụng đang chạy tại địa chỉ: htpp://localhost:3001");
// });
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
// Cấu hình body-Parse
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

require ('./routes/ProductRoute')(app);
// app.use("/api", productRoute);

app.listen(3001, () => { 
    console.log("Ứng dụng đang chạy tại port: http://localhost:3001");
});