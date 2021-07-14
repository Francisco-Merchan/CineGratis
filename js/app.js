import { navUsuario, navAdmin, navSinUsuario } from "./funciones.js";
import { filterArrays, crearSeccion } from "./funciones.js";

let peliculas = [
  {
    name: "La Chica Danesa",
    category: "Drama",
    url: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/la-chica-danesa-primeros-poster-de-la-pelicula/la-chica-danesa/69568916-1-esl-ES/La-chica-danesa.jpg",
    id: Date.now(),
    destacada: "false",
    description:
      "El pintor Einar Wegener descubre que se siente mujer y, con el apoyo y ayuda de su esposa, se connvierte en uno de los primeros casos en la historia en someterse a una cirugía de cambio de sexo. Una historia real en donde el amor dentro un matrimonio se dirige a la búsqueda de la identidad de género de Einar.",
  },
  {
    name: "El triunfo del Espiritu",
    category: "Drama",
    url: "https://diamondfilms.com/img/poster/5c924d4d73d192c0277b6edcf.jpg",
    id: Date.now(),
    destacada: "true",
    description:
      "Historia del atleta James Cleveland Owens, el coloso de la velocidad que saltó a la fama en los Juegos Olímpicos de Berlín de 1936, en pleno régimen nazista. Corrían los tiempos de la Gran Depresión americana y Jesse, además de estudiar y entrenar, lidiaba con el peso de las expectativas familiares, la tensión racial que se respiraba en la Universidad Estatal de Ohio y su propia competitividad.",
  },
  {
    name: "Troya",
    category: "Drama",
    url: "https://www.themoviedb.org/t/p/original/kdHDmckwm3PIsysUMJ4o0noWD9n.jpg",
    id: Date.now(),
    destacada: "false",
    description:
      "En la antigua Grecia, la pasión de dos de los amantes más legendarios de la historia, Paris, príncipe de Troya (Orlando Bloom) y Helena (Diane Kruger), reina de Esparta, desencadena una guerra que asolará una civilización. El robo de Helena a su esposo, el rey Menelao (Brendan Gleeson), por parte de Paris es un insulto que no se puede tolerar. El orgullo familiar establece que una afrenta a Menelao es una afrenta a su hermano Agamenón (Brian Cox), el poderoso rey de Micenas, que no tarda en reunir a todas las grandes tribus de Grecia para recuperar a Helena de manos de los troyanos y defender el honor de su hermano.",
  },
  {
    name: "El Conjuro",
    category: "Terror",
    destacada: "false",
    url: "https://1.bp.blogspot.com/-18sJa03fzxw/WhXAW_Tu8fI/AAAAAAAAntI/qgDC6B86NUAScqfYRS_eFnCXg04dvUKeQCLcBGAs/s00/El_Conjuro_Nuevo_Poster_Latino_JPosters.jpg",
    id: Date.now(),
    description:
      "A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.",
  },
  {
    name: "Saw",
    destacada: "true",
    category: "Terror",
    url: "https://es.web.img3.acsta.net/medias/nmedia/18/89/75/36/20065254.jpg",
    id: Date.now(),
    description:
      "Adam y Lawrence se despiertan encadenados en un baño infecto con un cadáver entre ellos. Su secuestrador es un maniaco, cuyo juego consiste en forzar a sus cautivos a herirse a sí mismos o a otros para permanecer vivos.",
  },
  {
    name: "Anabelle",
    category: "Terror",
    destacada: "false",
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/annabelle-vuelve-casa-poster-1558075914.jpg",
    id: Date.now(),
    description:
      "Adam y Lawrence se despiertan encadenados en un baño infecto con un cadáver entre ellos. Su secuestrador es un maniaco, cuyo juego consiste en forzar a sus cautivos a herirse a sí mismos o a otros para permanecer vivos.",
  },
  {
    name: "Click",
    destacada: "true",
    category: "Comedia",
    url: "https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/69/56/69/20063817.jpg",
    id: Date.now(),
    description:
      "Un arquitecto que trabaja demasiado consigue un control remoto universal que le permite adelantar, retrasar y detener el mundo que lo rodea. Las complicaciones se presentan cuando el artefacto empieza a fallar y adelanta la vida del arquitecto a su manera.",
  },
  {
    name: "American Pie",
    category: "Comedia",
    destacada: "false",
    id: Date.now(),
    url: "https://i.etsystatic.com/22518473/r/il/e7657b/2270599985/il_570xN.2270599985_ku16.jpg",
    description:
      "Cuatro adolescentes se comprometen a perder su virginidad y hacen un pacto. Cada uno trata de ser el primero, pero se encuentran con obstáculos para lograr su objetivo.",
  },
  {
    name: "Mi Villano Favorito",
    destacada: "false",
    category: "Comedia",
    url: "https://i.pinimg.com/originals/8f/cd/d4/8fcdd4b38c9aa8353373cd300127c277.jpg",
    id: Date.now(),
    description:
      "Mientras intenta cumplir su diabólico plan para robarse a la luna, el acto criminal más increíble de la Historia, un supervillano enfrenta su reto más grande, tres pequeñas huérfanas que desean convertirlo en su papá. La visión de este supervillano, y de sus secuaces, irá cambiando poco a poco gracias a esas tres pequeñas que llegarán a su corazón.",
  },
];

localStorage.setItem("peliculas", JSON.stringify(peliculas));
localStorage.setItem("log", "false");

navbar();

(function destacadas() {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  const section = document.querySelector(".categorias");
  if (peliculas.some((pelicula) => pelicula.destacada === "true")) {
    const arrayPeliculas = peliculas.slice(0, 6);
    crearSeccion(arrayPeliculas, "Destacadas");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Drama")) {
    const arrayPeliculas = filterArrays(peliculas, "Drama");
    crearSeccion(arrayPeliculas, "Drama");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Terror")) {
    const arrayPeliculas = filterArrays(peliculas, "Terror");
    crearSeccion(arrayPeliculas, "Terror");
  }
  if (peliculas.some((pelicula) => pelicula.category === "Comedia")) {
    const arrayPeliculas = filterArrays(peliculas, "Comedia");
    crearSeccion(arrayPeliculas, "Comedia");
  }
})();

export function navbar() {
  const user = JSON.parse(localStorage.getItem("usuario"));
  let isLog = localStorage.getItem("log");
  const header = document.querySelector("#header");
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-dark", "bg-dark", "navbar-expand-md");
  nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("cerrarSesion")) {
      isLog = false;
      localStorage.setItem("log", isLog);
      window.location.href = "../index.html";
    }
  });
  if (isLog === "true") {
    if (user.rol === "user") {
      nav.innerHTML = navUsuario(user);
      header.append(nav);
      return;
    } else {
      nav.innerHTML = navAdmin(user);
      header.append(nav);
      return;
    }
  } else {
    nav.innerHTML = navSinUsuario(user);
    header.append(nav);
    return;
  }
}
