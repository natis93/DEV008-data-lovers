import { example } from './data.js';
// import data from './data/lol/lol.js';
import dataGhibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*const titles = ["Castle in the Sky", "Grave of the Fireflies", "Only Yesterday", "Porco Rosso", "Spirited Away"];

// Filtrar las frutas que comienzan con la letra "a"
const filteredFilms = titles.filter(title => title.charAt(0) === "a").sort();

console.log(filteredFilms); // Resultado: ["Castle in the Sky"]*/

//const filmFilters = document.getElementById('film-filters');
//const filmList = document.getElementById('film-list');
//const films = filmList.querySelectorAll('.film');

/*filmFilters.addEventListener('change', function() {
  const selectedValue = this.value;

  if (selectedValue === 'a-z') {
    films.forEach(function(film) {
      filmList.appendChild(film);
    });
  } else if (selectedValue === 'date') {
    films.forEach(function(film) {
      const filmDate = new Date(film.getAttribute('data-date'));
      film.setAttribute('data-timestamp', filmDate.getTime());
    });

    Array.from(films)
      .sort((a, b) => b.getAttribute('data-timestamp') - a.getAttribute('data-timestamp'))
      .forEach(function(film) {
        filmList.appendChild(film);
      });
  } else if (selectedValue === 'best-rated') {
    films.forEach(function(film) {
      const filmRating = parseFloat(film.getAttribute('data-rating'));
      film.setAttribute('data-rating-value', filmRating);
    });

    Array.from(films)
      .sort((a, b) => b.getAttribute('data-rating-value') - a.getAttribute('data-rating-value'))
      .forEach(function(film) {
        filmList.appendChild(film);
      });
  }
});*/
//const filmsGhibli = dataGhibli.films
//for (let index = 0; index < filmsGhibli.length; index++) {
// const element = filmsGhibli[index];
//console.log(element.title);}


// Aquí iría el código JavaScript que muestra los títulos de las películas
const filmsGhibli = dataGhibli.films;
const filmList = document.getElementById('film-list');

filmsGhibli.forEach(function (element) {
  const filmTitle = document.createElement('p');
  filmTitle.textContent = element.title;
  filmList.appendChild(filmTitle);
});

// Supongamos que tienes un array de películas llamado "peliculas"
const peliculas = [
  { titulo: 'Película 1', director: 'Director 1' },
  { titulo: 'Película 2', director: 'Director 2' },
  { titulo: 'Película 3', director: 'Director 3' }
];

peliculas.forEach(function(pelicula) {
  // Crear elemento de película
  const peliculaElement = document.createElement('div');
  peliculaElement.classList.add('pelicula');

  // Crear elementos de título y director
  const tituloElement = document.createElement('h3');
  tituloElement.textContent = pelicula.titulo;

  const directorElement = document.createElement('p');
  directorElement.textContent = 'Director: ' + pelicula.director;

  // Agregar elementos al contenedor de la película
  peliculaElement.appendChild(tituloElement);
  peliculaElement.appendChild(directorElement);

  // Agregar la película al contenedor principal
  filmList.appendChild(peliculaElement);
});
