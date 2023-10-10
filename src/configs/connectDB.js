import mysql from 'mysql2'
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'thb2',
    password: ''
})
try{
    var connection = pool.promise();
    console.log('KẾT nối thành công');
}catch(error){
    console.log(error)
}
export default connection