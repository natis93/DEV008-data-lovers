import { filtrarPeliculas, mostrarPeliculas, ordenarPeliculas, ordenarPorRtScore } from "./data.js";

const botonMostrar = document.getElementById("showFilmsButton");
const botonVolver = document.getElementById("goHomeButton");
const peliculas = mostrarPeliculas();
const filtrado = document.getElementById('input-busqueda-de-peliculas');
const ordenAlfabetico = document.getElementById('orden-alfabetico');

function visualizarPeliculasEnPantalla(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  contenedor.innerHTML = ''
  for (let i = 0; i < dataghibli.length; i++) {
    const pelicula = dataghibli[i]; // Obtener la película correspondiente
    const listaPeliculas = `
    <li class="pelicula">
      <h2>${dataghibli[i].title}</h2>
      <img src =${dataghibli[i].poster} class="imagen-pelicula" />
      <p>${dataghibli[i].description}</p><p> Year: ${dataghibli[i].release_date}</p>
      <p> Dir: ${dataghibli[i].director}</P> &#9733 Punctuation &#9733 : ${dataghibli[i].rt_score}
    </li>`;
    contenedor.innerHTML += listaPeliculas;
    // Agregar evento de clic a cada película pop up
    const peliculasElements = contenedor.querySelectorAll('.pelicula');
    peliculasElements[i].addEventListener('click', () => mostrarDetallesPelicula(pelicula));
  }
}
function mostrarDetallesPelicula(pelicula) {
  const popupContainer = document.getElementById("popup-container");
  
  // Crear el contenido del pop-up
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  
  const titulo = document.createElement("h2");
  titulo.textContent = pelicula.title;
  popupContent.appendChild(titulo);
  
  const descripcion = document.createElement("p");
  descripcion.textContent = pelicula.description;
  popupContent.appendChild(descripcion);
  
  const anioLanzamiento = document.createElement("p");
  anioLanzamiento.textContent = "Year: " + pelicula.release_date;
  popupContent.appendChild(anioLanzamiento);
  
  const director = document.createElement("p");
  director.textContent = "Dir: " + pelicula.director;
  popupContent.appendChild(director);
  
  const puntaje = document.createElement("p");
  puntaje.textContent = "&#9733; Punctuation &#9733;: " + pelicula.rt_score;
  popupContent.appendChild(puntaje);
  
  // Agregar el contenido del pop-up al contenedor
  popupContainer.innerHTML = "";
  popupContainer.appendChild(popupContent);
  
  // Mostrar el pop-up
  popupContainer.style.display = "block";
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
  const selectedOption = this.options[this.selectedIndex].value;
  let peliculasOrdenadas= peliculas
  peliculasOrdenadas = ordenarPorRtScore(peliculas);
  //ordenamiento de peliculas
  if (selectedOption === 'a-z') {
    peliculasOrdenadas = ordenarPeliculas(peliculas, selectedOption);
  } else if (selectedOption === 'z-a') {
    peliculasOrdenadas = ordenarPeliculas(peliculas, selectedOption);
  } else if (selectedOption === 'rt-score-alta') {
    peliculasOrdenadas = ordenarPorRtScore(peliculas, 'alta');
  } else if (selectedOption === 'rt-score-baja') {
    peliculasOrdenadas = ordenarPorRtScore(peliculas, 'baja');
  }
  
  visualizarPeliculasEnPantalla(peliculasOrdenadas);
});
//interfaz uno y dos
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