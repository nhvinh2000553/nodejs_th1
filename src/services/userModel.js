import pool from './../configs/connectDB'

const getAllUser = async () => {
    try{
        const [rows, fields] = await pool.execute('SELECT * FROM `users`')
        return rows

    }catch(error){
        console.log(error);
    }
}
const detailUser = async (user) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` where username=?', [user])
    return rows[0]
}
const updateUser = async (fullname, address, email, user) => {
    await pool.execute('update users set fullname=?, address=?, email=? where username=?', [fullname, address, email, user])
}
const insertUser = async (user, pass, role, address, fullname) => {
    await pool.execute('insert into users value(?,?,?,?,?)', [user, pass, role, address,fullname])
}
const deleteUser = async (req, res) => {
    await pool.execute('delete from users where user=?', [user])
}
const createNewUser = () => {

}
export default {getAllUser, detailUser, updateUser, insertUser, deleteUser, createNewUser }