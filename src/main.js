import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const titles = ["Castle in the Sky", "Grave of the Fireflies", "Only Yesterday", "Porco Rosso", "Spirited Away"];

// Filtrar las frutas que comienzan con la letra "a"
const filteredFilms = titles.filter(title => title.charAt(0) === "a").sort();

console.log(filteredFilms); // Resultado: ["Castle in the Sky"]

alert('hola');

console.log(example, data);
