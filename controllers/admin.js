const Product = require('../models/product');
const Employee = require('../models/employee')

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
