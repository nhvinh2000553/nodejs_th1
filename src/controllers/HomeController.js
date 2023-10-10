import express from "express"
import userModel from "../services/userModel"
const getHomePage =async (req, res) => {
    const users = await userModel.getAllUser();
    return res.render("home",{data :{title : "HomePagee", page : "main",  users: users} })
}
export default getHomePage