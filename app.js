// Imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Data
const myData = require("./myData.json");
const originalProjects = myData["projects"]["originalProjects"];
const tutorialProjects = myData["projects"]["tutorialProjects"];
const thoughts = myData["thoughts"];
const books = myData["recommendations"]["books"];

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
  res.render("thoughts", {
    thoughts: thoughts,
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
