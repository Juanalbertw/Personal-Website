// Imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// Data
const myData = require("./myData.json");
const originalProjects = myData["projects"]["originalProjects"];
const tutorialProjects = myData["projects"]["tutorialProjects"];
const books = myData["recommendations"]["books"];

mongoose.connect(
  "mongodb+srv://user1:MongoDB123@cluster0.39zcuhb.mongodb.net/personalWebDB"
);

const thoughtSchema = new mongoose.Schema({
  topic: String,
  thoughts: [{ title: String, description: [String] }],
});

const Thought = mongoose.model("Thought", thoughtSchema);

// App

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/education", (req, res) => {
  res.render("education-item", { backPage: "home" });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    originalProjects: originalProjects,
    tutorialProjects: tutorialProjects,
  });
});

app.get("/projects/original/:projectId", (req, res) => {
  const projectId = req.params.projectId;

  res.render("project-item", {
    backPage: "projects",
    project: originalProjects[projectId],
  });
});

app.get("/projects/tutorial/:projectId", (req, res) => {
  const projectId = req.params.projectId;

  res.render("project-item", {
    backPage: "projects",
    project: tutorialProjects[projectId],
  });
});

app.get("/cv", (req, res) => {
  res.render("cv");
});

app.get("/thoughts", (req, res) => {
  Thought.find({}, (err, foundItems) => {
    if (err) {
      res.send(err);
    } else {
      // Gather the topics that already exist in an array
      let listOfTopics = [];
      foundItems.forEach((obj) => {
        listOfTopics.push(obj.topic);
      });

      res.render("thoughts", {
        thoughtsData: foundItems,
      });
    }
  });
});

app.get("/recommendations", (req, res) => {
  res.render("recommendations", {
    books: books,
  });
});

app.listen(3000, () => {
  console.log("App has started successfully.");
});
