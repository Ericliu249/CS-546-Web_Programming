const userRoutes = require("./user");
const todolist = require("./todolist");

let constructorMethod = app => {
    app.use("/admin", userRoutes);
    app.use("/todolist", todolist);
};

module.exports = {
    user: require("./user"),
    todolist: require("./todolist")
};
