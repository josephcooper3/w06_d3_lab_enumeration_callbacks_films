const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllFilmTitles = function(){
  const filmTitles = this.films.map (function(film) {
    return film.title
  })
  return filmTitles
}

Cinema.prototype.findByTitle = function(title) {
  const foundFilm = this.films.find(function(film){
    return film.title === title
  })
  return foundFilm
}

Cinema.prototype.filmsByProperty = function(property, value) {
  const foundFilms = this.films.filter(function(film){
    return film[property] === value
  })
  return foundFilms
}

Cinema.prototype.checkFilmsOfYear = function(year) {
  return this.films.some(function(film){
    return film.year === year
  })
}

Cinema.prototype.checkAllFilmsOverLength = function(length) {

  return this.films.every(function(film){
    return film.length > length
  })
}

Cinema.prototype.totalRunningTime = function(){
  const total = this.films.reduce(function(accumulator, film) {
    return accumulator + film.length
  }, 0)

  return total
}

module.exports = Cinema;
