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

////FIND WOULD BE MORE SUITABLE AS IT FINDS THE FIRST FILM AND RETURNS JUST THAT ONE////////////////

Cinema.prototype.findByTitle = function (title) {
  return this.cinemaFilms.find((film) => film.title === title);
};

Cinema.prototype.findByGenre = function (genre) {
  return this.cinemaFilms.filter((film) => film.genre === genre);
};

Cinema.prototype.findByYear = function (year) {
  return this.cinemaFilms.filter((film) => film.year === year);
};

Cinema.prototype.filmLength = function (length) {
  return this.cinemaFilms.filter((film) => film.length >= length);
};

Cinema.prototype.totalFilmsLength = function () {
  return this.cinemaFilms.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
};

module.exports = Cinema;
