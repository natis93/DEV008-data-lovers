import { example } from './data.js';
// import data from './data/lol/lol.js';
import dataGhibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';


const filmFilters = document.getElementById('film-filters');
const filmList = document.getElementById('film-list');
const films = filmList.querySelectorAll('.film');


const filmsGhibli = dataGhibli.films
for (let index = 0; index < filmsGhibli.length; index++) {
  const element = filmsGhibli[index];
  console.log(element.title);
}
