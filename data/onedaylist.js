const mongoCollections = require("../config/mongoCollections");
const onedaylist = mongoCollections.onedaylist;
const ObjectID = require('mongodb').ObjectID;
module.exports = {
    async getListById(id) {
        if (!id) throw "You must provide an id to search for";
        try {
            const onedaylistCollection = await onedaylist();
            const onedaylistArray = await onedaylistCollection.findOne({_id: new ObjectID(id)});
            if (onedaylistArray === null) throw `No onedaylistArray`;
            return onedaylistArray;
        } catch (e) {
            throw e;
        }
    }
};

