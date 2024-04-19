// var { conn, sql } = require('../database/connectdb');

// module.exports = function() {
//     this.getAll = async (result) => {
//         var pool = await conn;
//         var sqlString = 'SELECT * FROM CarProduct';
//         return await pool.request().query(sqlString, (err, data) => {
//             if (data.recordset.length > 0) {
//                 result(null, data.recordset);
//             } else {
//                 result(true, null);
//             }
//         });
//     };
        
//     this.getOne = async (id, result) => {
//         var pool = await conn;
//         var sqlString = 'SELECT * FROM CarProduct WHERE id = @varId';
//         return await pool
//         .request()
//         //kiểm tra điều kiện đầu vào phải là int
//         .input('varId', sql.Int, id)
//         .query(sqlString, (err, data) => {
//             // console.log(err, data.recordset);
//             if (data.recordset.length > 0) {
//                 result(null, data.recordset);
//             } else {
//                 result(true, null);
//             }
//         });
//     };

//     this.create = async (newData, result) => {
//         var pool = await conn;
//         var sqlString =
//             'INSERT INTO CarProduct (Tenxe, Socho) VALUES (@tenxe, @socho)';
//         return await pool
//         .request()
//         .input('tenxe', sql.NVarChar, newData.Tenxe) //req.body.'Tên trường trong SQL'
//         .input('socho', sql.Int, newData.Socho)
//         .query(sqlString, (err, data) => {
//             // console.log(req.body);
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, newData);
//             }
//         });
//     };

//     this.update = async (newData, result) => {
//     var pool = await conn;
//     var sqlString =
//         'UPDATE CarProduct SET Tenxe = @tenxe, Socho = @socho WHERE Id = @id';
//     return await pool
//         .request()
//         .input('tenxe', sql.NVarChar, newData.Tenxe) //req.body.'Tên trường trong SQL'
//         .input('socho', sql.Int, newData.Socho)
//         .input('id', sql.Int, newData.Id)
//         .query(sqlString, (err, data) => {
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, newData);
//             }
//         });
//     };

//     this.delete = async (id, result) => {
//     var pool = await conn;
//     var sqlString = 'DELETE from CarProduct WHERE Id = @id';
//     return await pool
//         .request()
//         .input('id', sql.Int, id)
//         .query(sqlString, (err, data) => {
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, data);
//             }
//         });
//     };
// }
const db = require('../database/connectdb');
const Products = (products) => {
    this.id = products.id;
    this.tenxe = products.tenxe;
    this.socho = products.socho;
    this.mota = products.mota;
}

Products.get_all = (result) => {
    db.query('SELECT * FROM products', (err, product) => {
        if (err || product.lenght === 0) {
            result(null);
        } else {
            result(product);
        }
    });
}

Products.getById = (id, result) => {
    db.query(`SELECT * FROM products WHERE id = ${id}`, (err, product) => {
        if (err || product.lenght === 0) {
            result(null);
        } else {
            result(product[0]);
        }
    });
}

Products.create = (data, result) => {
    db.query('INSERT INTO products SET ?', data, (err, product) => {
        if (err) {
            result(null);
        } else {
            result({id: product.insertId, ...data});
        }
    })
};

Products.remove = (id, result) => {
    db.query('DELETE FROM products WHERE id = ?', id, (err, product) => {
        if (err) {
            result(null);
        } else {
            result("Xóa sản phẩm " + id + "thành công");
        }
    });
}

Products.update = (data, result) => {
    db.query('UPDATE products SET tenxe=?, socho=?, mota=? WHERE id=?', [data.tenxe, data.socho, data.mota, data.id], (err, product) => {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

module.exports = Products;