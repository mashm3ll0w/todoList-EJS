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

	switch (currentDay) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			console.log("Error!! The day today is " + currentDay);
			break;
	}

	res.render("list", { dayOfWeek: day });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
