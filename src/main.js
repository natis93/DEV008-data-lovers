import { filterFilms, showFilms, sortFilms } from "./data.js";
const showButton = document.getElementById("showFilmsButton");
const backButton = document.getElementById("goHomeButton");
const films = showFilms();
const filter = document.getElementById('input-film-search');
const abcSort = document.getElementById('alphabetical-order');


function displayFilmsOnscreen(dataghibli) {
  const container = document.getElementById("container-films");
  container.innerHTML = ''
  for (let i = 0; i < dataghibli.length; i++) {
    const listFilms = `
    <li class="film">
      <h2>${dataghibli[i].title}</h2>
      <img src =${dataghibli[i].poster} class="imagen-pelicula" />
      <label>${dataghibli[i].description}</label>${dataghibli[i].release_date}
      <p>${dataghibli[i].rt_score }</p><p>${dataghibli[i].director}</P>
    </li>`;
    container.innerHTML += listFilms;
  }
}

const sortedFilms = sortFilms(films, 'a-z');
displayFilmsOnscreen(sortedFilms);

//se crea escuchador de evento para los botones

filter.addEventListener('keyup', function () {
  const filteredFilms = filterFilms(films, filter.value);
  displayFilmsOnscreen(filteredFilms);
});

showButton.addEventListener('click', switchScreens);
backButton.addEventListener('click', switchScreens);
abcSort.addEventListener('change', function () { 
  const selectedOption = this.options[this.selectedIndex];
  const sortedFilms = sortFilms(films, selectedOption.value);
  
  displayFilmsOnscreen(sortedFilms);
});


function switchScreens(e) {
  e.preventDefault();

  const header = document.getElementById("header");
  const screenTwo = document.getElementById("second-interface");

  if (window.getComputedStyle(header).display === "block") {
    header.style.display = "none";
    screenTwo.style.display = "block";
  } else if (window.getComputedStyle(screenTwo).display === "block") {
    screenTwo.style.display = "none";
    header.style.display = "block";
  }
}


