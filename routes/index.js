const userRoutes = require("./user");
const todolistRoutes = require("./todolist");
const onedaylistRoutes = require("./onedaylist");
const reviewRoutes = require("./reviews");
const path = require("path");

const constructorMethod = app => {
    app.use("/admin", userRoutes);
    app.use("/todolist", todolistRoutes);
    app.use("/onedaylist", onedaylistRoutes);
    app.use("/place/reviews", reviewRoutes);
    app.use("*", (req, res) => {
        res.status(404);
        res.sendFile(path.resolve("static/404.html"));
    });
};

module.exports = constructorMethod;