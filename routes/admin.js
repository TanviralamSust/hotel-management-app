const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/products => GET
router.get('/products', adminController.getProducts);
// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
// /admin/edit-product => POST
router.post('/edit-product', adminController.postEditProduct);
// /admin/delete-product => POST
router.post('/delete-product', adminController.postDeleteProduct);


// /admin/employees => GET
router.get('/employees', adminController.getEmployees);
// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployee);

// /admin/add-employee =>POST
router.post('/add-employee', adminController.postAddEmployee);
// /admin/edit-employee =>GET
router.get('/edit-employee/:employeeId', adminController.getEditEmployee);

// /admin/edit-employee =>POST
router.post('/edit-employee', adminController.postEditEmployee);
// /admin/delete-product => POST
router.post('/delete-employee', adminController.postDeleteEmployee);

router.post('/add-room', adminController.postAddRoom);

module.exports = router;