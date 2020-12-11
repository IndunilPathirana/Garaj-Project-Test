const path = require('path');
const express = require('express');

const customerController = require('../controllers/customer');

const router = express.Router();

router.get('/', customerController.getCustomers);

router.get('/:first_name', customerController.getCustomerByFname);

router.get('/:nic', customerController.getCustomerByNic);

router.post('/addnewcustomer', customerController.postNewCustomer);


module.exports = router;
