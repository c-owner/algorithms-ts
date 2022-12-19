"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.application = express();
    }
    return App;
}());
var app = new App().application;
var style = 'background: #222; color: #bada55';
console.log("%cWelcome! ", style);
app.get("/", function (req, res) {
    res.send("hello world");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
