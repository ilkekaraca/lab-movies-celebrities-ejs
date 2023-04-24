// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const movieModel = require("../models/movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/", async (req, res) => {
  try {
    const allMovies = await movieModel.find();
    res.render("movies/movies.ejs", { allMovies });
  } catch (error) {
    console.log(error);
  }
});

router.get("/create", async (req, res) => {
  try {
    const allCeleb = await Celebrity.find();

    res.render("movies/new-movie", { allCeleb });
  } catch (err) {
    console.log(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const newMovie = await movieModel.create({ ...req.body });

    res.redirect("/movies");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
