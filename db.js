// Export mongoose
const  mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var uri = 'Vmongodb+srv://ims_user1:supersecret@imsmongodb.34v41.mongodb.net/IMS_DB?retryWrites=true&w=majority';

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});

// << db setup >>
/*const db = require("../db");
const router = require("./shop");
const dbName = "IMS_DB";
const collectionName = "d07_customers"; */

