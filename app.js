const express = require("express")
const app = express();
const movies = [
  {title: "starwards", id:1},
  {title: "toystory", id:2},
  {title: "Minimoys",id:3},
]

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/movies/:id", (req, res) => {
  req.params.id;
const movie = movies.find ((movie) => movie.id == req.params.id);
if (movie) {
  res.status(200).json(movie);
}
else {
  res.status(404).json();
}
});
 
module.exports = app
