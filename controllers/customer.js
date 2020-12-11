
const Customer = require("../models/Customer");
const db = require("../db");


exports.getCustomers = (req, res, next) => {
   
      Customer.find(function (err, result) {
        if (err) return next(err);
        res.json(result);
      });
};

exports.getCustomerByFname = (req, res, next) => {
  const f_name = req.params.first_name;
  Customer.findById(f_name, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
};

exports.getCustomerByNic = (req, res, next) => {
  const nic = req.params.nic;
  Customer.findById(nic, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
};

/*ADD NEW CUSTOMER*/
exports.postNewCustomer = (req, res, next) => {
 // const newCustomer = new Customer({ f_name: req.body.f_name, nic: req.body.nic });
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
   // post.f_name=req.body.f_name;
    res.json(post);
 
  });
 };  
  



/*GET ALL CUSTOMERS 
  app.get('/getallcustomers', function(req, res, next) {
    Customer.find(function (err, result) {
      if (err) return next(err);
      res.json(result);
      console.log(result);
    });

   });*/



//-----------------
/* SAVE NEW CUSTOMER
app.post('/addnewcustomer', function(req, res, next) {
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    
  });
 }); */

 /* DELETE PRODUCT 
 app.delete('deletecustomer/:f_name', function(req, res, next) {
  Product.findByIdAndRemove(req.params.f_name, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });*/




/*app.post('/',(req,res) => {
  console.log(req.body);
});


module.exports = app;
*/