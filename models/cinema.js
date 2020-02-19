const Cinema = function (cinemaFilms = []) {
  this.cinemaFilms = cinemaFilms;
};


Cinema.prototype.addFilm = function (film) {
  return this.cinemaFilms.push(film);
};

Cinema.prototype.collectionOfFilms = function (films) {
  return films.map((film) => {
    return film;
  });
};

module.exports = Cinema;
