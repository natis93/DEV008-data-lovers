//import { example } from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';



/*const filmFilters = document.getElementById('film-filters');
const filmList = document.getElementById('film-list');
const films = filmList.querySelectorAll('.film');*/


const filmsGhibli = dataGhibli.films
// Obtén una referencia al elemento div
const filmListDiv = document.getElementById("film-list");

// Generar los elementos de imagen y agregarlos al div
for (let i = 0; i < filmsGhibli.length; i++) {
  const divPosterFilm = document.createElement("div");
  const imgElement = document.createElement("img");

  // Establece el atributo src con la URL de la imagen actual
  imgElement.src = filmsGhibli[i].poster;
  // Agrega la imagen al elemento div
  divPosterFilm.appendChild(imgElement);
  // Establece el atributo style para cambiar el tamaño de la imagen
  //imgElement.style.width = tamanosImagenes[i];
  const titleElement = document.createElement("h4");
  titleElement.textContent = filmsGhibli[i].title;
  divPosterFilm.appendChild(titleElement);

  const release_dateElement = document.createElement("p");
  release_dateElement.textContent = filmsGhibli[i].release_date;
  divPosterFilm.appendChild(release_dateElement);

  const directorElement = document.createElement("p");
  directorElement.textContent = filmsGhibli[i].director;
  divPosterFilm.appendChild(directorElement);
  filmListDiv.appendChild(divPosterFilm);


  document.getElementById("showFilmsButton").addEventListener("click", function() {
    //ocultar la pagina principal
    document.getElementById("header").style.display = "none";
    document.getElementById("selectDirectors").style.display="none";
    //mostrar la seccion de peliculas
    document.getElementById("film-list").style.display = "block";
    document.getElementById("showFilmsButton").style.display = "none";
    document.getElementById("goHomeButton").style.display = "block";
  });
  
  document.getElementById("goHomeButton").addEventListener("click", function() {
    //mostrar la pagina principal
    document.getElementById("header").style.display = "block";
    document.getElementById("selectDirectors").style.display = "block";
    //ocultar la seccion de peliculas
    document.getElementById("film-list").style.display = "none";
    document.getElementById("showFilmsButton").style.display = "block";
    document.getElementById("goHomeButton").style.display = "none";
  });

  

  console.log(titleElement)

}
const filterSelected = document.getElementById("selectDirectors");
filterSelected.addEventListener("change", () => {
  let nameDirectors = document.getElementById("selectDirectors").value;
  console.log(nameDirectors);
});/*

/*
const filterSelected = document.querySelectorAll(".combo-box-filter"); //getElementby ID

filterSelected.forEach((element) => {
  element.addEventListener("click", (event) => {
    const chosenFilter = dataGhibli(newfilms, event.target.value);

    const show = (filmsGhibli) => {
      displayFilms(filmsGhibli);
      console.log(filmsGhibli);
    };

    show(chosenFilter);
  });
});*/
