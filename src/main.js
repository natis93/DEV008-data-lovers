//import { example } from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';



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
  // Agrega la imagen al elemento div
  filmListDiv.appendChild(imgElement);
  // Establece el atributo style para cambiar el tamaño de la imagen
  //imgElement.style.width = tamanosImagenes[i];
  const titleElement = document.createElement("h3");
  titleElement.textContent = filmsGhibli[i].title;
  filmListDiv.appendChild(titleElement);

  const release_dateElement = document.createElement("p");
  release_dateElement.textContent = filmsGhibli[i].release_date;
  filmListDiv.appendChild(release_dateElement);

  const directorElement = document.createElement("p");
  directorElement.textContent = filmsGhibli[i].director;
  filmListDiv.appendChild(directorElement);



  console.log(titleElement)

}


