const mongoCollections = require("../config/mongoCollections");
const reviews = mongoCollections.reviews;
const todolist = mongoCollections.todolist;
const data = require("../data");
const todolistData = data.todolist;
const mongo = require("mongodb");

module.exports = {
    async getAllReviews(id){
        const reviewsCollection = await reviews();
        const todolistCollection = await todolist();
        const allToDo = await todolistCollection.find({}).toArray();
        let foundPlaceId = "";
        for(let i = 0; i < allToDo.length; i++){
            let oneDayList = allToDo[i].oneDayListId;
            for(let j = 0; j < oneDayList.length; j++){
                let recommendedPlace = oneDayList[j];
                if(recommendedPlace._id == id){
                    foundPlaceId = recommendedPlace.recommendPlaceId[0]._id;
                }
                
            }
            
        }

        return await reviewsCollection.find({recommendedPlaceId: foundPlaceId}).toArray();
    },

    async getReviews(){
        const reviewsCollection = await reviews();
        return await reviewsCollection.find({}).toArray();
    },
    async addReview(author, content, placeId, userId){
        //if(typeof title !== "string") throw "Title is not of type string";
        //if(typeof author._id !== "string" || ) throw "Author is not of type string";
        if(typeof content !== "string") throw "Content of review is not of type string";

        const reviewsCollection = await reviews();

        let d = new Date();
        let date = "";
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let time = d.getHours();
        let ampm = "";
        if(time > 12) {
            time = time - 12;
            ampm = "PM";
        }
        else{
            ampm = "AM"
        }

        date += months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + ",  " + time + ":" + d.getMinutes() + ampm;
        const newReview = 
        {
            name: author,
            description: content,
            userId: userId,
            recommendedPlaceId: placeId,
            date: date,

        }

        let insertInfo = await reviewsCollection.insertOne(newReview);
        let tempId = insertInfo.insertedId;
        let newReviewObj = await reviewsCollection.findOne({_id: tempId});
        
        return newReviewObj;
    },

    async getReviewById(id){

        if(id === undefined) throw "Error ID not provided";

        const reviewsCollection = await reviews();
        let newId = new mongo.ObjectID(id);
        let results = await reviewsCollection.findOne({_id: newId});

        if(!results) throw "ID Not found";
        return results;

    },

    async removeReview(id){
        if(id === undefined) throw "Error ID not provided";

        const reviewsCollection = await reviews();
        let newId = new mongo.ObjectID(id);
        let deleted = await reviewsCollection.deleteOne({_id: newId});

        if(deleted.deletedCount === 0) throw "Error could not delete";
    }
};


