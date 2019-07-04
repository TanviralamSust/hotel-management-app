const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    roomNo: Sequelize.INTEGER,
    bookingDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerNId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerPhone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerBill: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Book;
