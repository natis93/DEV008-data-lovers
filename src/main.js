import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const movieFilters = document.getElementById('movie-filters');
const movieList = document.getElementById('movie-list');
const movies = movieList.querySelectorAll('.movie');

movieFilters.addEventListener('change', function() {
  const selectedValue = this.value;

  if (selectedValue === 'a-z') {
    movies.forEach(function(movie) {
      movieList.appendChild(movie);
    });
  } else if (selectedValue === 'date') {
    movies.forEach(function(movie) {
      const movieDate = new Date(movie.getAttribute('data-date'));
      movie.setAttribute('data-timestamp', movieDate.getTime());
    });

    Array.from(movies)
      .sort((a, b) => b.getAttribute('data-timestamp') - a.getAttribute('data-timestamp'))
      .forEach(function(movie) {
        movieList.appendChild(movie);
      });
  } else if (selectedValue === 'best-rated') {
    movies.forEach(function(movie) {
      const movieRating = parseFloat(movie.getAttribute('data-rating'));
      movie.setAttribute('data-rating-value', movieRating);
    });

    Array.from(movies)
      .sort((a, b) => b.getAttribute('data-rating-value') - a.getAttribute('data-rating-value'))
      .forEach(function(movie) {
        movieList.appendChild(movie);
      });
  }
});

console.log(example, data);
