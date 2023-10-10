import express from 'express'
import userModel from '../services/userModel'
const getAllUser = async (req, res) => {
  const userList = await userModel.getAllUser()
  res.render('listUser', {users: userList})
}

const detailUser = async (req, res) => {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    res.render('detailUser', {data: dataUser})
}
const editUser = async (req, res) => {
  const user = req.params.username
  const dataUser = await userModel.detailUser(user)
  res.render('detailUser', {data: dataUser})
}
const updateUser = async (req, res) => {
  const user = req.params.username
  const {fullname, address, email} = req.body
  await userModel.updateUser(fullname, address, email, user)
 res.redirect('/list-user')
}
const deleteUser = async (req, res) => {
  let {username} = req.body
  await userModel.deleteUser(username)
  res.redirect("/list-user")
}
const createUser =  (req, res) => {
  res.render('home', {data: {title: 'List User', page: 'listUser'}})
}
const insertUser = async (req, res) => {
  let role = 0
  let { user, pass, fullname, address } = req.body
  if ('role' in req.body)
    role = 1
  if (!userModel.isUserExist(user)) {
    await userModel.insertUser(user, pass, role, address, fullname)
    res.redirect("/")
  }
  else
    res.send("User exist")
}
export default {detailUser, getAllUser, editUser, updateUser, deleteUser, createUser, insertUser}