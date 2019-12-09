// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	var today = new Date();
	var currentDay = today.getDay();
	var day = "";

	res.render("list", { dayOfWeek: day });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
