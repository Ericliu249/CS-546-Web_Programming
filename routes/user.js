const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.user;
const path = require("path");
const xss = require('xss');

router.get("/", (req, res) => {
    /*if (req.cookies.AuthCookie) {
        res.render("/private");
    }
    else {*/
    const newpath = path.join(__dirname, "../dist/index.html")
    res.sendFile(newpath);
    /* }*/
});

router.post("/login", async (req, res) => {
    let searchData = req.body;
    if (!searchData.email) {
        res.status(400);
        res.json({error: "Please input email."});
    }
    if (!searchData.password) {
        res.status(400);
        res.json({error: "Please input password."});
    }
    try {
        const result = await userData.checkPassword(searchData.email, searchData.password);
        if (result) {
            res.cookie("AuthCookie", result.username);
            res.redirect("/admin/private");
        }
        else {
            res.json({error: "Your passsword are not valid! Please check it!"});
        }
    } catch (e) {
        res.status(400);
        res.json({error: `Your passsword are not valid! Please check it!`});
    }
});

router.get("/private", async (req, res) => {
    if (!req.cookies.AuthCookie) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find user!"});
    }
    try {
        const getDetail = await userData.getPeopleByCookie(req.cookies.AuthCookie);
        res.json(getDetail);
    } catch (e) {
        res.status(403);
        res.json({error: "Can't find user!"});
    }
});

router.post("/signup", async (req, res) => {
    let newUser = req.body;
    let {firstname, lastname, email, username, password, rpassword} = newUser;
    try {
        if (newUser.password != newUser.rpassword) {
            res.status(401).json(`password not match`);
        }
        const user = await userData.getUserByUsernameOrEmail(newUser.username.toLowerCase(), newUser.email);
        if (user) {
            res.status(401).json('Username or User Email Already Exists');

        }
        const hashedPassword = await userData.createHashedPassword(xss(newUser.password));
        const userCreated = await userData.addUser(
            xss(newUser.firstname),
            xss(newUser.lastname),
            xss(newUser.email),
            xss(newUser.username),
            hashedPassword
        );
        let result = userCreated.ops[0];
        delete result.hashedPassword;
        res.status(200).json(result);

    } catch (e) {
        res.status(403);
        res.json({error: "Can't find onedaylist!"});
    }
});

router.get("/logout", (req, res) => {
    let name = req.cookies.AuthCookie;
    res.clearCookie("AuthCookie");
    res.json({name: name});
});

router.get("/getById/:id", async (req, res) => {
    try {
        const getOne = await userData.getUserById(req.params.id);
        res.json(getOne);
    } catch (e) {
        res.status(403);
        res.json({error: "Can't find user!"});
    }
});

router.get("/update", async (req, res) => {
    let newUser = req.body;
    let {_id, interestPlaces, preferredFood, preferDistance, dietaryRestrictions} = newUser;
    try {
        if (!newUser._id) {
            res.json('Please login!');
        }
        const getOne = await userData.update(newUser._id, newUser.interestPlaces, newUser.preferredFood, newUser.preferDistance, newUser.dietaryRestrictions);
        res.json(getOne);
    } catch (e) {
        res.status(403);
        res.json({error: "Can't find user!"});
    }
});
module.exports = router;
