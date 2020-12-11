'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const path = require('path');


// create express app
const  app = express();
const customer = require("./routes/customer");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//app.use("/admin", adminData.routes);
//app.use(shopRoutes);

//--------Customer Info -----------------------
app.use("/customers",customer);



app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
