
/*jslint node: true */
"use strict";

var express = require("express");
var app = express();
var fs = require("fs");
var port = 80;

// Set render engine
app.set("view engine", "pug");
app.set('views', './application/views');

// Static routes
app.use("/js", express.static("application/js"));
app.use("/css", express.static("application/css"));

// Routes
app.get("/", (req, res) => {
  res.render("index", {title : "index"});
});

app.get("/info", (req, res) => {
  res.render("information", {title: "information"});
});

app.get("/projets", (req, res) => {
  res.render("projets", {title: "projets"});
});

app.get("/contact", (req, res) => {
  res.render("contact", {title: "contact"});
});

app.get("*", (req, res) => { // 404 error
  res.render("404",
    {title : "ERROR : 404"});
});
// Start server
app.listen(port);
console.log("server listening : port " + port);
