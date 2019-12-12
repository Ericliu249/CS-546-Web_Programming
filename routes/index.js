const userRoutes = require("./user");
const todolistRoutes = require("./todolist");
const onedaylistRoutes = require("./onedaylist");
const signupRoutes = require("./signup");
const path = require("path");

const constructorMethod = app => {
    app.use("/admin", userRoutes);
    app.use("/todolist", todolistRoutes);
    app.use("/onedaylist", onedaylistRoutes);
    app.use("/signup", signupRoutes);
    app.use("*", (req, res) => {
        res.status(404);
        res.sendFile(path.resolve("static/404.html"));
    });
};

module.exports = constructorMethod;