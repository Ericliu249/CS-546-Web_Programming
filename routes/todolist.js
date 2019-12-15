const express = require("express");
const router = express.Router();
const data = require("../data");
const todolistData = data.todolist;
const userData = data.user;

router.get("/getAll", async (req, res) => {
    try {
        const getAll = await todolistData.getAllList();
        res.json(getAll);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find todolist!"});
    }
});
router.get("/getPlaceByOnedaylistId/:id", async (req, res) => {
    try {
        const getOne = await todolistData.getByOnedaylistId(req.params.id);
        var result;
        getOne[0].oneDayListId.forEach(function (data) {
            if (data._id == req.params.id) {
                result = data;
            }
        })
        res.json(result.recommendPlaceId[0]);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});
router.get("/getAllOnedaylist/:id", async (req, res) => {
    try {
        const getOne = await todolistData.getById(req.params.id);
        res.json(getOne.oneDayListId);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});
router.get("/getTodolistByLocation/:location", async (req, res) => {
    try {
        if (req.params.location == 'undefined') {
            const getAll = await todolistData.getAllList();
            res.json(getAll);
        } else {
            const getOne = await todolistData.getTodolistByLocation(req.params.location);
            res.json(getOne);
        }
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});
router.get("/getById/:id", async (req, res) => {
    try {
        const getOne = await todolistData.getById(req.params.id);
        res.json(getOne);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});
router.get("/", async (req, res) => {
    try {
        const getAll = await todolistData.getAllList();
        todolistData.getAllList();
        res.json(getAll);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find todolist!"});
    }
});
router.get("/getTop", async (req, res) => {
    try {
        // const limis = await todolistData.getByOnedaylistId(req.params.limits);
        const getAll = await todolistData.getTopList(3);
        res.json(getAll);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find todolist!"});
    }
});
router.get("/getTodolistByPreference/:id", async (req, res) => {
    try {
        var userId = req.params.id;
        console.log(userId);
        if (!userId) {
            const getAll = await todolistData.getAllList();
            res.json(getAll);
        } else {
            var user = await userData.getUserById(userId);
            var preference = [];
            for(var choice in user.interestPlaces){
                if(choice.isChecked === true)
                    preference.push(choice.selected);
            }
            const getOne = await todolistData.getTodolistByPreference(preference);
            res.json(getOne);
        }
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});

module.exports = router;
