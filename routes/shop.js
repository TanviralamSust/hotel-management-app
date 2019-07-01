const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const hotelController = require('../controllers/hotel');

const router = express.Router();

router.get('/', hotelController.getIndex);

router.get('/rooms/:roomId', hotelController.getRoom);

router.get('/book-room', hotelController.getBookRoom);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);

module.exports = router;
