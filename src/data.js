import data from './data/ghibli/ghibli.js';
export function mostrarPeliculas() {
  return data.films;
}

export function ordenarPeliculas(dataghibli, orden) {
  if (orden === 'a-z') {
    return dataghibli.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else {
    return dataghibli.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
}

export function ordenarPorRtScore(a, b) {
  if (a["rt-score"] < b["rt-score"]) {
    return -1;
  } else if (a["rt-score"] > b["rt-score"]) {
    return 1;
  } else {
    return 0;
  }
}
export function ordenarPeliculasPorRtScore(peliculas, orden) {
  if (orden === 'a-z') {
    return peliculas.sort((a, b) => a.title.localeCompare(b.title));
  } else if (orden === 'rt-score') {
    return peliculas.sort(ordenarPorRtScore);
  } else {
    return peliculas;
  }
}


export function filtrarPeliculas(dataghibli, valorAFiltrar) {
  const peliculasFiltradas = dataghibli.filter((pelicula) => {
    return pelicula.title.toLowerCase().indexOf(valorAFiltrar.toLowerCase()) !== -1
  })
  const peliculasOrdenadas = ordenarPeliculasPorRtScore(peliculasFiltradas);
  return peliculasOrdenadas;
}
export function getEmojiForScore(score) {
  if (score >= 90) {
    return '🔥'; // Emoji para una puntuación alta
  } else if (score >= 70) {
    return '⭐️'; // Emoji para una puntuación moderada
  } else {
    return '✨'; // Emoji para una puntuación baja
  }
}
