const Room = require('../models/room');

exports.getIndex = (req, res, next) => {
    Room.findAll()
        .then(rooms => {
            res.render('hotel/index', {
                rooms: rooms,
                pageTitle: 'Hotel',
                path: '/'
            });
        })
        .catch(err => console.log(err));
};

exports.getRoom = (req, res, next) => {
    const roomId = req.params.roomId;
    Room.findByPk(roomId)
        .then(room => {
            res.render('hotel/room-detail', {
                room: room,
                pageTitle: 'Room no:'+room.no,
                path: '/'
            });
        })
        .catch(err => console.log(err));
};

exports.getBookRoom = (req, res, next) => {
    const roomId = req.body.roomId;
    res.render('hotel/book-room-form', {
        pageTitle: 'Book room',
        path: '/',
        editing: false,
        roomId: roomId
    });
};