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


// /admin/rooms => GET
router.get('/rooms', adminController.getRooms);

// /admin/add-room => GET
router.get('/add-room', adminController.getAddRoom);

// /admin/add-room => POST
router.post('/add-room', adminController.postAddRoom);

// /admin/edit-room =>GET
router.get('/edit-room/:roomId', adminController.getEditRoom);

// /admin/edit-room => POST
router.post('/edit-room', adminController.postEditRoom);

// /admin/delete-room => POST
router.post('/delete-room', adminController.postDeleteRoom);


// /admin/book-room =>GET


// /admin/book-room =>POST
router.post('/book-room', adminController.postBookRoom);

// /admin/booked-room =>GET
router.get('/booked-room', adminController.getBookRoom);

// /admin/delete-booking =>POST
router.post('/cart-delete-book', adminController.postDeleteBook);

// /admin/transaction-history =>GET
router.get('/transaction-history', adminController.getTransactionHistory);

// /admin/transaction-history-search =>GET
router.get('/transaction-history-search', adminController.getTransactionHistorySearch);

// /admin/find-book-room-month =>POST
router.post('/find-book-room-month', adminController.postFindBookRoomMonth);

// /admin/find-book-room-date =>POST
router.post('/find-book-room-date', adminController.postFindBookRoomDate);

// /admin/find-transaction-history-month =>POST
router.post('/find-transaction-month', adminController.postFindTransactionMonth);
// /admin/find-transaction-history =>POST
router.post('/find-transaction', adminController.postFindTransaction);

module.exports = router;
