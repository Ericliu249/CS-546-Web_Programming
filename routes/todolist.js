const express = require("express");
const router = express.Router();
const data = require("../data");
const todolistData = data.todolist;

router.get("/getAll", async (req, res) => {
    try {
        const getAll = await todolistData.getAllList();
        res.json(getAll);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find todolist!"});
    }
});

module.exports = router;
