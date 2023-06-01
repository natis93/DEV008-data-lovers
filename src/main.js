//import { example } from './data.js';
// import data from './data/lol/lol.js';
import dataGhibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


const filmFilters = document.getElementById('film-filters');
const filmList = document.getElementById('film-list');
const films = filmList.querySelectorAll('.film');


const filmsGhibli = dataGhibli.films
// Obtén una referencia al elemento div
const filmListDiv = document.getElementById("film-list");

// Generar los elementos de imagen y agregarlos al div
for (let i = 0; i < filmsGhibli.length; i++) {
  // Crea un elemento de imagen
  const imgElement = document.createElement("img");

  // Establece el atributo src con la URL de la imagen actual
 imgElement.src = filmsGhibli[i].poster;

  // Establece el atributo style para cambiar el tamaño de la imagen
  //imgElement.style.width = tamanosImagenes[i];

  // Agrega la imagen al elemento div
  filmListDiv.appendChild(imgElement);
}











