//data format:
// {
//     "_id": "lsa8s9d8asfasfg39234n42",
//     “firstname” : “Mike”,
//     “lastname”: “James”,
//     “email” : “mjames@gmail.com”,
//     "username" : "turtles123",
//     "password" : "aASDASD32e-2-as/asdao1212sd60!3d3@@$wa",
//     "interestPlaces" : ["nature", "mountains", "forests"]
//     "preferredFood" : "noPreference",
//     "toDoList" : ["lsa8s9d8asfasfg39234n43"],
//     “postedReviews”: [“5f3fe8f1c0d3”, “43h54kj5h34kh”],
//     “postedRatings” : [“s2jl52fslfkja29fsd9”]
// }
const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.user;
const path = require("path");
const xss = require('xss');

router.get("/", async (req, res) => {
    try {
        if (req.cookies.AuthCookie) {
            res.redirect('/todolist');
        }
        else {
            //The form with jQuerry & AJAX:
            res.render("signup/signup", {
                partial: "signup-scripts"
            });
        }
    } catch (e) {
        res.render("error", { error: "--- OOPS ---" + e });
    }
});

router.post("/", async (req, res) => {

    let newUser = req.body;
    // {
    //     FirstName: 's',
    //     LastName: 's',
    //     Email: 'aa@aa',
    //     UserName: 'a',
    //     Password: 'a',
    //     ConfirmPassword: 'a'
    // }
    try {
        if (!newUser.FirstName)
            res.status(401).render("signup/signup", {
                partial: "signup-scripts",
                error: `not provide FirstName`
            });
        if (!newUser.LastName)
            res.status(401).render("signup/signup", {
                partial: "signup-scripts",
                error: `not provide Password`
            });
        // if (!newUser.Email)
        //     res.status(401).render('signup/signup', { error: `not provide Email` });
        // if (!newUser.UserName)
        //     res.status(401).render('signup/signup', { error: `not provide UserName` });
        // if (!newUser.Password)
        //     res.status(401).render('signup/signup', { error: `not provide Password` });
        // if (!newUser.ConfirmPassword)
        //     res.status(401).render('signup/signup', { error: `not provide ConfirmPassword` });

        if (newUser.Password != newUser.ConfirmPassword) {
            //passwords do not match
            //We need to display error to user better
            //TODO:
            res.status(401).render("signup/signup", {
                partial: "signup-scripts",
                error: `not match`
            });
        } else {
            const user = userData.getUserByUsernameOrEmail(newUser.UserName.toLowerCase(), newUser.Email);
            if (user) {
                //Username already in system
                //We need to display error to user better
                //TODO: should do in AJAX way
                res.status(401).render("signup/signup", {
                    partial: "signup-scripts",
                    error: 'Username or User Email Already Exists' 
                });
            } else {
                const hashedPassword = await usersData.createHashedPassword(xss(newUser.Password))
                const userCreated = await userData.addUser(
                    xss(newUser.FirstName),
                    xss(newUser.LastName),
                    xss(newUser.Email),
                    xss(newUser.UserName),
                    hashedPassword
                );
                res.status(200).json(userCreated);
            }
        }
    } catch (e) {
        res.render("error", { error: "--- OOPS ---" + e });
    }


    //check the sign up infomation save to the database!;

    // try {
    //     const signUpInfo = req.body;
    //     // console.log(signUpInfo);
    //     if (!signUpInfo.Password)
    //         res.status(401).render('signup/signup', { error: `not provide Password` });
    //     if (!signUpInfo.Password)
    //         res.status(401).render('signup/signup', { error: `not provide Password` });
    //     if (!signUpInfo.Password)
    //         res.status(401).render('signup/signup', { error: `not provide Password` });
    //     if (!signUpInfo.UserName)
    //         res.status(401).render('signup/signup', { error: `not provide UserName` });
    //     if (!signUpInfo.Password)
    //         res.status(401).render('signup/signup', { error: `not provide Password` });
    //     if (!signUpInfo.Password)
    //         res.status(401).render('signup/signup', { error: `not provide Password` });
    //
    //     var user = users.getUserByUsername(loginInfo.UserName);
    //     console.log(user);
    //     if (user !== null) {
    //         //If the user provides a successful username / password combination, you will set a cookie named AuthCookie. This cookie must be named AuthCookie or your assignment will receive a major point deduction. //After logging in, you will redirect the user to the /private route.
    //         var compareToMatch = await bcrypt.compare(loginInfo.Password, user.hashedpassword);
    //         console.log(compareToMatch);
    //         if (compareToMatch == false) {
    //             res.status(401).render("signup/signup", {
    //                 partial: "jquery-dom-scripts"
    //             });
    //         }
    //         else {
    //             // const now = new Date();
    //             // const expiresAt = new Date();
    //             // expiresAt.setHours(expiresAt.getHours() + 1);
    //             req.session.userID = user._id;
    //             req.session.authenticate = true;
    //             res.redirect('/todolist');
    //         }
    //     }
    //     else {
    //         //     If the user does not provide a valid login, you will render the login screen once again, and this time show an error message (along with an HTTP 401 status code) to the user explaining that they did not provide a valid username and/or password.
    //         res.status(401).render("signup/signup", {
    //             partial: "jquery-dom-scripts"
    //         });
    //     }
    // } catch (e) {
    //     res.status(401).render("signup/signup", {
    //         partial: "jquery-dom-scripts"
    //     });
    // }

});

module.exports = router;
