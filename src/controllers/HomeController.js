import express from "express"
const getHomePage = (req, res) => {
    return res.render("home",{data :{title : "HomePagee", page : "main"} })
}
export default getHomePage