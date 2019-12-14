const express = require("express");
const router = express.Router();
const data = require("../data");
const onedaylistData = data.onedaylist;

router.get("/getById/:id", async (req, res) => {
    try {
        const getOne = await onedaylistData.getListById(req.params.id);
        res.json(getOne);
    } catch (e) {
        res.status(403);
        res.render("people/errorDetails", {error: "Can't find onedaylist!"});
    }
});

module.exports = router;
