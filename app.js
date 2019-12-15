// We first require our express package
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const path = require("path");
/*let runStartup = require("./routes/startup");
runStartup().then(function (allList) {
    console.log(
        "After the advanced document setup has been complete, we have the following users:"
    );
    console.log(allList);
});*/
/*let googleApi=require("./routes/googleApi");
googleApi();*/
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
