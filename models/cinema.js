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

Cinema.prototype.findByTitle = function (title) {
  return this.cinemaFilms.filter((film) => film.title === title)
};

Cinema.prototype.findByGenre = function (genre) {
  return this.cinemaFilms.filter((film) => film.genre === genre)
};

module.exports = Cinema;
