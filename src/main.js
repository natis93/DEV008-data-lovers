import { filtrarPeliculas, mostrarPeliculas, ordenarPeliculas } from "./data.js";
const botonMostrar = document.getElementById("showFilmsButton");
const botonVolver = document.getElementById("goHomeButton");
const peliculas = mostrarPeliculas();
const filtrado = document.getElementById('input-busqueda-de-peliculas');
const ordenAlfabetico = document.getElementById('orden-alfabetico');


function visualizarPeliculasEnPantalla(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  contenedor.innerHTML = ''
  for (let i = 0; i < dataghibli.length; i++) {
    const listaPeliculas = `
    <li class="pelicula">
      <h2>${dataghibli[i].title}</h2>
      <img src =${dataghibli[i].poster} class="imagen-pelicula" />
      <label>${dataghibli[i].description}</label>${dataghibli[i].release_date}
      <p>${dataghibli[i].rt_score }</p><p>${dataghibli[i].director}</P>
    </li>`;
    contenedor.innerHTML += listaPeliculas;
  }
}

const peliculasOrdenadas = ordenarPeliculas(peliculas, 'a-z');
visualizarPeliculasEnPantalla(peliculasOrdenadas);

//se crea escuchador de evento para los botones

filtrado.addEventListener('keyup', function () {
  const peliculasFiltradas = filtrarPeliculas(peliculas, filtrado.value);
  visualizarPeliculasEnPantalla(peliculasFiltradas);
});

botonMostrar.addEventListener('click', alternarPantallas);
botonVolver.addEventListener('click', alternarPantallas);
ordenAlfabetico.addEventListener('change', function () { 
  const selectedOption = this.options[this.selectedIndex];
  const peliculasOrdenadas = ordenarPeliculas(peliculas, selectedOption.value);
  
  visualizarPeliculasEnPantalla(peliculasOrdenadas);
});


function alternarPantallas(e) {
  e.preventDefault();

  const header = document.getElementById("header");
  const segundaPantalla = document.getElementById("segunda-interfaz");

  if (window.getComputedStyle(header).display === "block") {
    header.style.display = "none";
    segundaPantalla.style.display = "block";
  } else if (window.getComputedStyle(segundaPantalla).display === "block") {
    segundaPantalla.style.display = "none";
    header.style.display = "block";
  }
}


