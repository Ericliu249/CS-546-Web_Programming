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
    },
    async getById(id) {
        try {
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.findOne({_id: id});
            if (todolistArray === null) throw `No todolistArray`;
            return todolistArray;
        } catch (e) {
            throw e;
        }
    },
    async getByOnedaylistId(id) {
        try {
            var searchPost = {
                "oneDayListId._id": id
            };
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.find(searchPost).toArray();
            if (todolistArray === null) throw `No todolistArray`;
            return todolistArray;
        } catch (e) {
            throw e;
        }
    },
    async getTodolistByLocation(location){
        try {
            var searchPost = {
                "oneDayListId.location": location
            };
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.find(searchPost).toArray();
            if (todolistArray === null) throw `No todolistArray`;
            return todolistArray;
        } catch (e) {
            throw e;
        }
    },
    async getTopList(limition) {
        try {
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.find().sort({'likes':-1}).limit(limition).toArray();
            if (todolistArray === null) throw `No todolistArray`;
            if (todolistArray.length == 0) throw `No todolistArray`;

            return todolistArray;
        } catch (e) {
            throw e;
        }
    },
    async getTodolistByPreference(preference){
        try {
            var allQuery = [];
            for(var type in preference){
                allQuery.push({"oneDayListId.recommendPlaceId.tag": {$regex :`${type}`}});
                allQuery.push({"oneDayListId.recommendPlaceId.typeOfPlace": {$regex :`${type}`}});
            }
            // console.log(allQuery);
            var searchPost = { $or:allQuery};
            const todolistCollection = await todolist();
            const todolistArray = await todolistCollection.find(searchPost).toArray();
            if (todolistArray === null) throw `No todolistArray`;
            return todolistArray;
        } catch (e) {
            throw e;
        }
    },

};

