const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.user;
const path = require("path");
router.get("/", (req, res) => {
    if (req.cookies.AuthCookie) {
        res.redirect("/private");
    }
    else {
        const newpath=path.join(__dirname, "../dist/index.html")
        res.sendFile(newpath);
    }
});

router.post("/login", async (req, res) => {
    let searchData = req.body;
    if (!searchData.username) {
        res.status(400);
        res.render("people/login", {error: "Please input username."});
    }
    if (!searchData.password) {
        res.status(400);
        res.render("people/login", {error: "Please input password."});
    }
    try {
        const result = await userData.checkPassword(searchData.username, searchData.password);
        if (result) {
            res.cookie("AuthCookie", searchData.username);
            res.redirect("/private");
        }
        else {
            res.render("people/login", {error: "Your passsword are not valid! Please check it!"});
        }
    } catch (e) {
        res.status(400);
        res.render("people/login", {error: `We're sorry, but no results were found for ${searchData.username}.`});
    }
});

router.get("/private", async (req, res) => {
    if(!req.cookies.AuthCookie) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find user!"});
    }
    try {
        const getDetail = await userData.getPeopleByCookie(req.cookies.AuthCookie);
        res.render("people/details", {gets: getDetail});
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find user!"});
    }
});

router.get("/logout", (req, res) => {
    let name=req.cookies.AuthCookie;
    res.clearCookie("AuthCookie");
    res.render("people/logout", {name: name});
});

module.exports = router;
