const assert = require('assert');
const Cinema = require('../models/cinema');
const Film = require('../models/film');

describe('Cinema', function() {

  let film1;
  let film2;
  let film3;
  let film4;
  let cinema;

  beforeEach(function() {
    film1 = new Film('Bad Boys', 'Action', 1995, 130);
    film2 = new Film('Gone in 60 Seconds', 'Action', 1999, 120);
    film3 = new Film('Love Actually', 'RomCom', 2000, 100);
    film4 = new Film('Back to the Future', 'Sci-Fi', 1995, 90);
    cinema = new Cinema([]);
  });

  it('should have a collection of films', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    const actual = cinema.collectionOfFilms(cinema.cinemaFilms)
    assert.deepStrictEqual(actual, cinema.cinemaFilms)
  });

  it('should be able to get a list of film titles');

  it('should be able to find a film by title');

  it('should be able to filter films by genre');

  it('should be able to check whether there are some films from a particular year');

  it('should be able to check whether all films are over a particular length');

  it('should be able to calculate total running time of all films');




});