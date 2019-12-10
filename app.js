// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var items = ["Item 01", "Item 02", "Item 03"];

app.get("/", (req, res) => {
	var today = new Date();
	var options = {
		weekday: "long",
		month: "long",
		day: "numeric"
	};

	var day = today.toLocaleDateString("en-US", options);

	res.render("list", { dayToday: day, newListItems: items });
});

app.post("/", (req, res) => {
	var item = req.body.newItem;
	items.push(item);
	res.redirect("/");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
