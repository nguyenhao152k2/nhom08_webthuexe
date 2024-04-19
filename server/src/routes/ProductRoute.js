// module.exports = (app) => {
//     var productController = require('../controllers/ProductController');
//     //Lấy dữ liệu từ server thông qua
//     //Phương thức GET
//     app.get('/product', productController.getList);
//     app.get('/product/:id', productController.getById);

//     //Nhận dữ liệu từ client gửi lên thông qua
//     //phương thức POST
//     app.post('/product', productController.addNew);

//     //Nhận dữ liệu từ client gửi lên thông qua
//     // phương thức put
//     app.put('/product', productController.update);

//     app.delete('/product/:id', productController.delete);
// }

module.exports = (router) => {
    var { get_list, get_detail, add_product, remove_product, update_product} = require('../controllers/ProductController');

    router.get('/api/products', get_list);

    router.get('/api/products/:id', get_detail);

    router.post('/api/products', add_product);

    router.delete('/api/products/:id', remove_product);

    router.put('/api/products/:id', update_product);
};
    