const Cinema = function (cinemaFilms = []) {
  this.cinemaFilms = cinemaFilms;
};


Cinema.prototype.addFilm = function (film) {
  return this.cinemaFilms.push(film);
};

Cinema.prototype.collectionOfFilms = function () {
  return this.cinemaFilms.map((film) => {
    return film;
  });
};

Cinema.prototype.filmTitles = function () {
  return this.cinemaFilms.map((film) => {
    return film.title;
  });
};

module.exports = Cinema;
