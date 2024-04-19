// var sql = require('mssql/msnodesqlv8');

// //các thông tin kết nối CSDL
// var config = {
//     server: 'localhost', //localhost DESKTOP-U7DNEU7\SQLEXPRESS
//     user: 'sa',
//     password: '12345678',
//     database: 'QL_ThueXeOto',
//     driver: 'msnodesqlv8',
// };

// const conn = new sql.ConnectionPool(config).connect().then(pool => {
//     return pool;
// });
// //xuất ra dưới dạng module gồm 2 thuộc tính conn, sql
// module.exports = {
//     _conn: conn,
//     _sql: sql,
// }
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ql_webthuexe',
});

connection.connect((err, conn) => {
    if (err) {
        console.log('Kết nối cơ sở dữ liệu không thành công!')
    }
});

module.exports = connection;