const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
let diary = require("./diary.json");
const app = express();
const cors = require("cors");

const getDate = () => {
  const date = new Date();
  const day = date.getDay();
  const x = date.getDate();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day_name = dayList[day];
  const month_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${day_name}, ${month_name[month - 1]} ${x}, ${year}`;
};

//allowing request from this domain

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// writing on the file
const save = () => {
  fs.writeFile("./diary.json", JSON.stringify(diary, null, 2), (error) => {
    if (error) {
      throw error;
    }
  });
};

//Posting An Entry

app.post("/entries/add", bodyParser.json(), (req, res) => {
  let newId = uuidv4();
  const date = getDate();
  const entry = {
    title: req.body.title,
    description: req.body.description,
    date: date,
  };
  diary.unshift({ ...entry, id: newId });
  save();
  res.send("The new entry was added successfully");
});

// Getting All Entries

app.get("/entries", (req, res) => {
  res.json(diary);
});

//Getting A single Entry

app.get("/entries/:id", (req, res) => {
  const findEntry = diary.find((entry) => entry.id === req.params.id);
  if (!findEntry) {
    res.status(404).send("Entry not found");
  } else {
    res.json(findEntry);
  }
});

//  Updating an Entry

app.put("/entries/update/:id", bodyParser.json(), (req, res) => {
  entry = diary.find((entry) => entry.id === req.params.id);
  if (entry.id === req.params.id) {
    entry.title = req.body.title;
    entry.description = req.body.description;
  }
  save();
  res.send("Entry Updated successfully");
});

// Deleting an Entry

app.delete("/entries/delete/:id", (req, res) => {
  diary = diary.filter((diary) => diary.id !== req.params.id);
  save();
  res.send("Entry Deleted successfully");
});

// serve listening on port 4000
app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`);
});
