import pool from './../configs/connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}

const detailUser = async (user) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` where user=?', [user])
    return rows[0]
}

const updateUser = async (fullname, pass, address, role, user) => {
    await pool.execute('update user set fullname=?, pass=?, address=?, role=? where user=?', [fullname, pass, address, role, user])
}
const deleteUser = async (req, res) => {
    await pool.execute('delete from users where user=?', [user])
}
const insertUser = async (user, pass, role, address, fullname) => {
    await pool.execute('insert into user value(?,?,?,?,?)', [user, pass, role, address,fullname])
}
const createNewUser = () => {

}
export default {getAllUser, createNewUser }