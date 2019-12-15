const express = require("express");
const router = express.Router();
const data = require("../data");
const reviewData = data.reviews;
const mongo = require("mongodb");
const path = require("path");

router.get("/:id", async (req, res) => {
    try {
        const newID = req.params.id;
        let allReviews = await reviewData.getAllReviews(newID);
        res.json(allReviews);
    }
    catch(error){
        res.sendStatus(404);
    }
});

router.post("/", async (req, res) => {
    const reviewInfo = req.body;
    if(!reviewInfo){
        res.status(400).json({error: "No data provided for post"});
        return;
    }
    if(!reviewInfo.content){
        res.status(400).json({error: "no content provided for post"});
        return;
    }
    if(!reviewInfo.author){
        res.status(400).json({error: "No author provided for post"});
        return;
    }

    /*
    let updatedAuthor = {
        _id: newId,
        name: tempAnimal.name
    }
    */
   
    try{
        let createdReview = await reviewData.addReview(reviewInfo.author, reviewInfo.content, reviewInfo.id, reviewInfo.userId);
    
        let updateReview = {
            _id: createdReview._id
        }
        //await reviewData.update(newId, updateReview);
        let all = await reviewData.getAllReviews(createdReview.recommendedPlaceId);

        res.status(200).json(all);
    }
    catch(error){
        console.log(error);
        res.sendStatus(404);
    }
});



router.delete("/:id", async (req,res) => {
    let postId = req.params.id;

    let result = {
        deleted: true,
        data: ""
    }
    try {
        let tempPost = await postData.getPostById(postId);
        result.data = tempPost;
    } catch (error) {
        res.sendStatus(404);
        return;
    }

    let temp = {
        _id: result.data._id,
        title: result.data.title
    }
    let posterID = result.data.author._id;

    try {
        let postDel = await postData.removePost(postId);
        await animalData.removePost(posterID,temp);
        res.json(result);
    } catch (error) {
        res.sendStatus(400);
    }

});




/*
router.put("/:id", async (req, res) => {
    const reviewInfo = req.body;
    let reviewId = req.params.id;

    if(!postInfo){
        res.status(400).json({error: "No data provided for post"});
        return;
    }
    if(!postInfo.newTitle && !postInfo.newContent){
        res.status(400).json({error: "newTitle or newContent were not provided"});
        return;
    }

    let newId = "";
    let foundP =""

    try {
        newId = new mongo.ObjectID(postId);
        foundP = await postData.getPostById(newId);  
    } catch (error) {
        res.status(404).json({error: "No post was found with this ID"});
        return;
    }
    
    let animalID = foundP.author._id;

    let tempAnimal = ""
    try {
        tempAnimal = await animalData.get(animalID);
    } catch (error) {
        res.sendStatus(404);
        return;
    }


    try {
        let results = await postData.updatePost(postId, postInfo.newContent, postInfo.newTitle);

        let updatedInfo = {
            "_id": results._id,
            "title": postInfo.newTitle
        }

        await animalData.updateTitle(animalID, updatedInfo);

        res.status(200).json(results);
    } 
    catch (error) {
        console.log(error)
        res.sendStatus(404);
    }
});
*/



module.exports = router;