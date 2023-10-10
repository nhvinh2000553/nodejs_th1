import express from 'express'
import userModel from '../services/userModel'
const getAllUser = async (req, res) => {
  let userList = await userModel.getAllUser()
  res.render('home', {data: {title: 'List User', page: 'listUser', rows: userList}})
}
const createUser = (req, res) => {
  res.render('home', {data: {title: 'List User', page: 'listUser'}})
}
const detailUser = async (req, res) => {
  if (isAuthentication(req, res) == true) {
    let user = req.params.username
    let dataUser = await userModel.detailUser(user)
    res.render('home', {data: {title: 'Detail User', page: 'detailUser', rows: dataUser}})
  }
}
const editUser = async (req, res) => {
  let user = req.params.username
  let dataUser = await userModel.detailUser(user)
  res.render('home', {data: { title: 'Edit User', page: 'editUser', rows: dataUser}})
}
const updateUser = async (req, res) => {
  console.log(req.body)
  let role = 0
  let { user, pass, fullname, address } = req.body
  if ('role' in req.body)
    role = 1
  await userModel.updateUser(full, pass, address, role, user)
  res.redirect("/list-user")
}
const deleteUser = async (req, res) => {
  let {username} = req.body
  await userModel.deleteUser(username)
  res.redirect("/list-user")
}
const createUser =  (req, res) => {
  res.render('home', { data: { title: 'Create New User', page: 'createNewUser'}})
}
const insert = async (req, res) => {
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
export default {getAllUser, createUser}