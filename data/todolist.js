const mongoCollections = require("../config/mongoCollections");
const todolist = mongoCollections.todolist;
module.exports = {
    async getAllList() {
        try {
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.find().toArray();
            if (todolistArray === null) throw `No todolistArray`;
            if (todolistArray.length == 0) throw `No todolistArray`;

            return todolistArray;
        } catch (e) {
            throw e;
        }
    }
};

