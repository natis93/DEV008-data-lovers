import data from './data/ghibli/ghibli.js';
export function showFilms() {
  return data.films;
}

export function sortFilms(dataghibli, order) {
  if (order === 'a-z') {
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

export function sorByRtScore(a, b) {
  if (a["rt-score"] < b["rt-score"]) {
    return -1;
  } else if (a["rt-score"] > b["rt-score"]) {
    return 1;
  } else {
    return 0;
  }
}
export function sortFilmsByRtScore(films, order) {
  if (order === 'a-z') {
    return films.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === 'rt-score') {
    return films.sort(sorByRtScore);
  } else {
    return films;
  }
}


export function filterFilms(dataghibli, filteredValue) {
  const filteredFilms = dataghibli.filter((film) => {
    return film.title.toLowerCase().indexOf(filteredValue.toLowerCase()) !== -1
  })
  const sortedFilms = sortFilmsByRtScore(filteredFilms);
  return sortedFilms;
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
