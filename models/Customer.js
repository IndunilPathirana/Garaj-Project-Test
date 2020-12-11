//'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;


const CustomerSchema =  new Schema({

    d07_customer_Id : {
        type : String,
       // required : true
    },   
    nic : {
        type : String,
         // required : true
    },    
    family_name : {
        type : String,
         // required : true
    }, 
    f_name : {
        type : String,
        //  required : true
    }, 
    m_name : {
        type : String,
        //  required : true
    }, 
    l_name : {
        type : String,
         // required : true
    }, 
    address : {
        type : String,
         // required : true
    }, 
    email : {
        type : String,
         // required : true
    }, 
    mobile : {
        type : String,
         // required : true
    }, 
     d09_vehicle_Id : {
            type :String,
           // required : true
     }
}, {
    collection: 'd07_customers'
});

 
module.exports=mongoose.model('Customer',CustomerSchema);