// var ProductModel = require('../models/ProductModel');
// var product = new ProductModel();

// exports.getList = (req, res) => {
//     product.getAll((err, data) => {
//         res.send({ result: data, error: err });
//     });
// };

// exports.getById = (req, res) => {
//     product.getOne(req.params.id, (err, data) => {
//         res.send({ result: data, error: err });
//     });
// };

// exports.addNew = (req, res) => {
//     product.create(req.body, (err, data) => {
//         res.send({ result: data, error: err });
//     });
// };

// exports.update = (req, res) => {
//     product.update(req.body, (err, data) => {
//         res.send({ result: data, error: err });
//     });
// };

// exports.delete = (req, res) => {
//     product.delete(req.params.id, (err, data) => {
//         res.send({ result: data, error: err });
//     });
// };
var Products = require('../models/ProductModel');

const get_list = (req, res) => {
    Products.get_all((data) => {
        res.send({ result: data });
    })
};

const get_detail = (req, res) => {
    Products.getById(req.params.id, (result) => {
        res.send({ _result: result });
    });
}

const add_product = (req, res) => { 
    var data = req.body;
    Products.create(data, (result) => {
        res.send({ result: result });
    });
}

const remove_product = (req, res) => {
    var id = req.params.id;
    Products.remove(id, (result) => {
        res.send({ result: result });
    });
}

const update_product = (req, res) => {
    var data = req.body;
    Products.update(data, (result) => {
        res.send({ result: result });
    });
};

module.exports = {
    get_list,
    get_detail,
    add_product,
    remove_product,
    update_product,
}