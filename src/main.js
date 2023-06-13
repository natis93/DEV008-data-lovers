import dataGhibli from './data/ghibli/ghibli.js';
import { filterGhibli } from './data.js';
/*const filmFilters = document.getElementById('film-filters');
const filmList = document.getElementById('film-list');
const films = filmList.querySelectorAll('.film');*/
const filmsGhibli = dataGhibli.films;
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

  document.getElementById("showFilmsButton").addEventListener("click", function () {
    //ocultar la pagina principal
    document.getElementById("header").style.display = "none";
    document.getElementById("selectDirectors").style.display = "none";
    //mostrar la seccion de peliculas
    document.getElementById("film-list").style.display = "block";
    document.getElementById("showFilmsButton").style.display = "none";
    document.getElementById("goHomeButton").style.display = "block";
  });
  document.getElementById("goHomeButton").addEventListener("click", function () {
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

function addFilmsToLibrary(films) {// Para el boton de busqueda
  for (let movieIndex = 0; movieIndex < films.length; movieIndex++) {
    const filteredMovie = films[movieIndex];
    const divFilm = document.createElement("div");
    const titleElement = document.createElement("h4");
    const directorElement = document.createElement("p");

    titleElement.textContent = filteredMovie.title;
    directorElement.textContent = filteredMovie.director;

    divFilm.appendChild(titleElement);
    divFilm.appendChild(directorElement);
    filmListDiv.appendChild(divFilm);
  }
}


const searchInput = document.getElementById("searchBar");
searchInput.addEventListener("input", SearchMovies);


const MovieNotFoundTemplate = document.createElement("div");
MovieNotFoundTemplate.classList.add("movie-not-found-container");
const MovieNotFoundText = document.createElement("p");
MovieNotFoundText.innerText = ("No match found");
MovieNotFoundText.classList.add("movie-not-found");
MovieNotFoundTemplate.appendChild(MovieNotFoundText);

function SearchMovies() {
  filmListDiv.innerHTML = "";
  // Agregar código para traer el input text, y sacar el texto de búsqueda
  const searchBarValue = document.getElementById("searchBar").value;
  // Agregar código para filtrar por título (solo por mientras, luego por más propiedades)
  const filteredMovies = dataGhibli.films.filter(film => film["title"].toLowerCase().includes(searchBarValue.toLowerCase()));

  if (filteredMovies.length === 0) {
    filmListDiv.classList.remove("index-movies-library");
    filmListDiv.appendChild(MovieNotFoundTemplate);
  } else {
    filmListDiv.classList.add("index-movies-library");
    addFilmsToLibrary(filteredMovies);
  }
}

const sortByButtons = document.querySelectorAll(".sort-by-option");
sortByButtons.forEach(sortByButton => sortByButton.addEventListener("click", SortByMoviesWrapper));

function SortByMoviesWrapper(event) {
  const button = event.target
  const sortByProperty = button.dataset.property

  let sortOrder = 1;
  switch (button.dataset.order) {
    case "asc":
      sortOrder = 1; // Ascendente
      break;
    case "desc":
      sortOrder = -1; // Descendente
      break;
  }

  const sortedMovies = (dataGhibli.films, undefined, undefined, sortByProperty, sortOrder);


  filmListDiv.innerHTML = "";
  addFilmsToLibrary(sortedMovies);
}
//funcio de boton
const sortByButton = document.getElementById("sort-by-button");
const options = document.querySelectorAll(".sort-by-option");

sortByButton.addEventListener("click", function () {
  // Muestra u oculta las opciones de ordenamiento al hacer clic en el botón
  document.querySelector(".options-to-click-sort-by").classList.toggle("show");
});

// Agrega un evento de escucha a cada opción de ordenamiento
options.forEach(function (option) {
  option.addEventListener("click", function () {
    const order = option.getAttribute("data-order");
    const property = option.getAttribute("data-property");
    console.log("Orden seleccionado:", order);
    console.log("Propiedad seleccionada:", property);
    // Realiza las acciones correspondientes según la opción seleccionada
  });
});

sortByButton.addEventListener("click", function () {
  // Mostrar u ocultar las opciones de ordenamiento al hacer clic en el botón
  const optionsList = document.querySelector(".options-to-click-sort-by");
  optionsList.classList.toggle("show");
});

options.forEach(function (option) {
  option.addEventListener("click", function () {
    const order = option.getAttribute("data-order");
    const property = option.getAttribute("data-property");
    const sortedFilms = sortFilmsByProperty(filmsGhibli, property, order);
    filterGhibli (sortedFilms);
  });
});

//const filterSelected = document.getElementById("selectDirectors");

/*filterSelected.addEventListener("change", () => {
  let nameDirectors = document.getElementById("selectDirectors").value;
  const filterSelectedData = filterGhibli(filmsGhibli,nameDirectors);
  for (let i = 0; i < filmsGhibli.length; i++) {
    const nameDirectors = document.createElement("div");
  }
    console.log(filterSelectedData);
});


const filterSelected = document.querySelectorAll(".combo-box-filter"); //getElementby ID
filterSelected.forEach((element) => {
  element.addEventListener("click", (event) => {
    const chosenFilter = dataGhibli(newfilms, event.target.value);
    const show = (filmsGhibli) => {
      displayFilms(filmsGhibli);
      console.log(filmsGhibli);
);
});*/




