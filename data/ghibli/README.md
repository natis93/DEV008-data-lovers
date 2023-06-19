## Índice

* [1. Introducción](#1-introducción)
* [2. World of Studio Ghibli](#2-worldofstudioghibli)
* [3. Nuestras Historias de Usuario](#3-hdu)
* [4. Prototipos de alta y baja fidelidad](#4-prototipos-diseño)
* [5. Problemas encontrados en tests de usabilidad](#5-problemas-encontrados)
* [6. Checklist](#6-checklist)

***

## 1. Introducción

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.

## 2. World of Studio Ghibli

Nuestro proyecto de World of Studio Ghibli nació con la idea de poder recopilar la mayor parte de las películas creadas por este estudio, donde también se pudiera tener acceso rápido a diferentes datos y distintos criterios.

Para poder hacernos una idea del tipo de sitio web que fans del estudio Ghibli preferirían, decidimos construir historias de usuario a partir de cuestionarios con preguntas que aludían al uso de colores y opciones de interfaz. Este cuestionario fue respondido por 57 personas y nos ayudó a crearnos una idea del tipo de sitio que potenciales usuarios apreciarían. Además, para entender mejor nuestros futuros resultados, hicimos una rápida investigación (research) y estos son algunos de los
hallazgos.

- Studio Ghibli tiene varias animaciones, para nuestras usuarias es importante saber cuántas y cuáles son.
- Las películas tienen diferentes directores, quienes son las mentes detrás de grandes animaciones, y asimismo, en Studio Ghibli hay directores que han colaborado en la creación de más de una animación. Por ello, es importante para nuestros usuarios poder conocerlos y saber quién dio vida a cada animación.
- Las películas tienen información relevante para nuestras usuarias, datos como descripción de la historia, fecha de lanzamiento, puntuación y director.

A continuación los resultados de nuestro cuestionario:

Resultado Colores https://imgur.com/k6d5syd

Resultado Tonos https://imgur.com/94M3gqW

Elemento de Inicio https://imgur.com/0WMSIGz

Finalmente, decidimos hacer un catastro en cuanto a la distribución de películas vistas por persona encuestada:

Listado de películas https://imgur.com/4Gqk0v7

Es a partir de los resultados de este ítem en particular que notamos que, si bien hay películas que se destacan como las más vistas, la película menos vista aún representó más del 20% de las respuestas. A raíz de esto, tomamos la decisión de usar las protagonistas femeninas de todas las películas del listado como parte de la pantalla de inicio.

## 3. Nuestras Historias de Usuario

Historias de Usuario 1 https://imgur.com/EajBaex  

Historias de Usuario 2 https://imgur.com/QtLXlyt

Historias de Usuario 3 https://imgur.com/O57OoYC

## 4. Prototipos de alta y baja fidelidad

* Prototipo de baja fidelidad:

Aquí nuestro prototipo de baja fidelidad https://imgur.com/7WGeMz7

* Prototipo de alta fidelidad:

Aquí imágenes de nuestro prototipo de alta fidelidad

Prototipo1 https://imgur.com/U8xnoOE

Prototipo2 https://imgur.com/FU5IP2q

Prototipo3 https://imgur.com/sk4iqoS

    https://www.canva.com/design/DAFjxXnzwE8/sCSP_pbWtF63rT900R3llQ/edit?utm_content=DAFjxXnzwE8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## 5. Problemas encontrados en tests de usabilidad

* Durante nuestro primer sprint de trabajo, trabajamos con funciones de sort que no cumplían con el requerimiento de utilizar la base de datos proporcionada, por lo que tuvimos que comenzar desde cero después de eso.
* Al comenzar a desarrollar las funciones en JS, tuvimos complicaciones con el uso de funciones desde el DOM, lo cual influía directamente con nuestra segunda Historia de Usuario. 

## 6. Checklist

* :heavy_check_mark: Usa VanillaJS.
* :heavy_check_mark: Pasa linter (`npm run pretest`)
* :heavy_check_mark: Pasa tests (`npm test`)
* :heavy_check_mark: Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* :heavy_check_mark: Incluye _Definición del producto_ clara e informativa en `README.md`.
* :heavy_check_mark: Incluye historias de usuario en `README.md`.
* :heavy_check_mark: Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* :heavy_check_mark: Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* :heavy_check_mark: Incluye link a Zeplin en `README.md`. (En este caso, Canva).
* :heavy_check_mark: Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* :heavy_check_mark: UI: Muestra lista y/o tabla con datos y/o indicadores.
* :heavy_check_mark: UI: Permite ordenar data por uno o más campos (asc y desc).
* :heavy_check_mark: UI: Permite filtrar data en base a una condición.
* :heavy_check_mark: UI: Es _responsive_.
