import { filtrarPeliculas, mostrarPeliculas, ordenarPeliculas, ordenarPorRtScore } from '../src/data.js';

describe('pruebas de peliculas ghibli ', () => {
  it('mostrar peliculas y que hayan 20', () => {
    const resultado = mostrarPeliculas();
    expect(resultado.length).toBe(20);
  });
  it('filtrar peliculas y que me arroje 2 peliculas', () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(todasLasPeliculas, 'castle');
    expect(resultado.length).toBe(2);
  });

  it('filtrar peliculas y que no haya peliculas', () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(todasLasPeliculas, 'castle34o8589304098');
    expect(resultado.length).toBe(0);
  });

  it('ordenar peliculas y que ordene de z hasta a', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'z-a'
    const resultado = ordenarPeliculas(dataghibli, orden);

    expect(resultado[0].title).toBe('Whisper of the Heart');
  });
  it('ordenar peliculas y que ordene de a hasta z', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'a-z'
    const resultado = ordenarPeliculas(dataghibli, orden);

    expect(resultado[0].title).toBe('Castle in the Sky');
  });

  it('mantener el orden original si las peliculas tienen el mismo titulo', () => {
    const dataghibli = [
      { title: 'A' },
      { title: 'A' },
      { title: 'A' }
    ];
    const orden = 'a-z';

    const resultado = ordenarPeliculas(dataghibli, orden);

    expect(resultado[0].title).toBe('A');
    expect(resultado[1].title).toBe('A');
    expect(resultado[2].title).toBe('A');
  });
});

describe('ordenarPorRtScore ', () => {

  it('ordenar peliculas y que ordene con puntuacion alta ', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'alta'
    const resultado = ordenarPorRtScore(dataghibli, orden);

    expect(resultado[0].rt_score).toBe('100');
  });

  it('ordenar peliculas y que ordene con puntuacion baja', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'baja'

    const resultado = ordenarPorRtScore(dataghibli, orden);

    expect(resultado[0].rt_score).toBe('41');
  });
  it('no debería modificar el orden si se proporciona un valor inválido', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'invalido';
    const resultado = ordenarPorRtScore(dataghibli, orden);

    expect(resultado).toEqual(dataghibli);
  });

  it('devuelve un nuevo arreglo sin modificar el original', () => {
    const dataghibli = mostrarPeliculas()

    const orden = 'alta'
    const resultado = ordenarPorRtScore(dataghibli, orden);
    expect(resultado).toEqual(dataghibli);
  });
  
});

