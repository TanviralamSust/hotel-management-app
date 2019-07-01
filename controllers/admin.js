const Employee = require('../models/employee');
const Product = require('../models/product');
const Room = require('../models/room');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.getAddEmployee = (req, res, next) => {
    res.render('admin/edit-employee', {
        pageTitle: 'Add Employee',
        path: '/admin/add-employee',
        editing: false
    });
};

exports.getAddRoom = (req, res, next) => {
    res.render('admin/edit-room', {
        pageTitle: 'Add Room',
        path: '/admin/add-room',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postAddEmployee = (req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const designation = req.body.designation;
    const contactNumber= req.body.contactNumber;
    req.user
        .createEmployee({
            name: name,
            price: price,
            designation: designation,
            imageUrl: imageUrl,
            contactNumber: contactNumber
        })
        .then(result => {
            // console.log(result);
            console.log('Created employee');
            res.redirect('/admin/employees');
        })
        .catch(err => {
            console.log(err);
        });
};
exports.postAddRoom = (req, res, next) => {
    const no = req.body.no;
    const type = req.body.type;
    const cap = req.body.cap;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user
        .createRoom({
        no: no,
        type: type,
        price: price,
        cap: cap,
        imageUrl: imageUrl,
        description: description
    }).then(result => {
        console.log('Created Room Successfully');
        res.redirect('/admin/rooms');
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditRoom = (req, res, next) => {
    const roomId = req.body.roomId;
    const updatedNo = req.body.no;
    const updateType = req.body.type;
    const updateCap = req.body.cap
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Room.findByPk(roomId)
        .then(room => {
            room.no = updatedNo;
            room.type = updateType
            room.cap = updateCap;
            room.price = updatedPrice;
            room.description = updatedDesc;
            room.imageUrl = updatedImageUrl;
            return room.save();
        })
        .then(result => {
            console.log('UPDATED ROOM!');
            res.redirect('/admin/rooms');
        })
        .catch(err => console.log(err));
};

exports.getEditRoom = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const roomId = req.params.roomId;
    req.user
        .getRooms({ where: { id: roomId } })
        // Product.findByPk(prodId)
        .then(rooms => {
            const room = rooms[0];
            if (!room) {
                // return res.redirect('/');
            }
            res.render('admin/edit-room', {
                pageTitle: 'Edit Room',
                path: '/admin/edit-room',
                editing: editMode,
                room: room
            });
        })
        .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user
    .getProducts({ where: { id: prodId } })
    // Product.findByPk(prodId)
    .then(products => {
      const product = products[0];
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};



exports.getEditEmployee = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const employeeId = req.params.employeeId;
    req.user
        .getEmployees({ where: { id: employeeId } })
        // Product.findByPk(prodId)
        .then(employees => {
            const employee = employees[0];
            if (!employee) {
                return res.redirect('/');
            }
            res.render('admin/edit-employee', {
                pageTitle: 'Edit Employee',
                path: '/admin/edit-employee',
                editing: editMode,
                employee: employee
            });
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.postEditEmployee = (req, res, next) => {
    const employeeId = req.body.employeeId;
    const updatedName = req.body.name;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesignation = req.body.designation;
    const updatedContactNumber = req.body.contactNumber;
    Employee.findByPk(employeeId)
        .then(employee => {
            employee.name = updatedName;
            employee.price = updatedPrice;
            employee.designation = updatedDesignation;
            employee.imageUrl = updatedImageUrl;
            employee.contactNumber = updatedContactNumber;
            return employee.save();
        })
        .then(result => {
            console.log('UPDATED Employee');
            res.redirect('/admin/employees');
        })
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getEmployees = (req, res, next) => {
    req.user
        .getEmployees()
        .then(employees => {
            res.render('admin/employees', {
                employees: employees,
                pageTitle: 'Employees of the office',
                path: '/admin/employees'
            });
        })
        .catch(err => console.log(err));
};

exports.getRooms = (req, res, next) => {
    Room.findAll()
        .then(rooms => {
            res.render('admin/rooms', {
                rooms: rooms,
                pageTitle: 'Admin Rooms',
                path: '/admin/rooms'
            });
        })
        .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.postDeleteEmployee = (req, res, next) => {
    const employeeId = req.body.employeeId;
    Employee.findByPk(employeeId)
        .then(employee => {
            return employee.destroy();
        })
        .then(result => {
            console.log('DESTROYED Employee');
            res.redirect('/admin/employees');
        })
        .catch(err => console.log(err));
};

exports.postDeleteRoom = (req, res, next) => {
    const roomId = req.body.roomId;
    Room.findByPk(roomId)
        .then(room => {
            return room.destroy();
        })
        .then(result => {
            console.log('DESTROYED ROOM');
            res.redirect('/admin/rooms');
        })
        .catch(err => console.log(err));
};
