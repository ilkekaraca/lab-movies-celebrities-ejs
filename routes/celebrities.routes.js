// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  try {
    const newCeleb = new Celebrity(req.body);
    await newCeleb.save();
    res.redirect("/celebrities");
  } catch (err) {
    res.render("celebrities/new-celebrity");
  }
});

router.get("/", async (req, res) => {
  try {
    const allCeleb = await Celebrity.find();
    res.render("celebrities/celebrities", { allCeleb });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
