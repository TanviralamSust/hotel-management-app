const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const BookRoomItem = sequelize.define('bookRoomItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
});

module.exports = BookRoomItem;
