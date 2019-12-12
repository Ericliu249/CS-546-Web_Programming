const userRoutes = require("./user");
const todolist = require("./todolist");
const onedaylist = require("./onedaylist");


let constructorMethod = app => {
    app.use("/admin", userRoutes);
    app.use("/todolist", todolist);
    app.use("/onedaylist", onedaylist);
};

module.exports = {
    user: require("./user"),
    todolist: require("./todolist"),
    onedaylist: require("./onedaylist")
};
