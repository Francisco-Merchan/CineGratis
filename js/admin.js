import { navbar, adminHTML, cardHTML } from "./funciones.js";
navbar();
adminHTML();

const panel = document.querySelector(".panelOptions");
const saveBtn = document.querySelector("#saveMovies");
let totalMovies = JSON.parse(localStorage.getItem("peliculas"));

class Movies {
  constructor(title, category, img, description) {
    this.title = title;
    this.category = category;
    this.img = img;
    this.description = description;
    this.id = Date.now();
  }
}

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputName = document.querySelector("#inputName").value;
  const categorySelect = document.querySelector("#categorySelect").value;
  const inputImg = document.querySelector("#inputImg").value;
  const description = document.querySelector("#descriptionInput").value;
  const movie = new Movies(inputName, categorySelect, inputImg, description);
  totalMovies.unshift(movie);
  localStorage.setItem("peliculas", JSON.stringify(totalMovies));
  let totalMovies = JSON.parse(localStorage.getItem("peliculas"));
  showCards(totalMovies);
});

function showCards(movies) {
  const list = document.querySelector(".list");
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movieCard");
    card.id = "${movie.id}";
    card.innerHTML = cardHTML(movie);
    list.append(card);
  });
}

panel.addEventListener("click", (e) => {
  const totalMovies = JSON.parse(localStorage.getItem("peliculas"));
  e.preventDefault();
  if (e.target.classList.contains("verTodas")) {
    document
      .querySelectorAll(".movieCard")
      .forEach((e) => e.parentNode.removeChild(e));
    showCards(totalMovies);
  }
  if (e.target.classList.contains("Terror")) {
    const terrorMovies = totalMovies.filter(
      (movie) => movie.category === "Terror"
    );
    document
      .querySelectorAll(".movieCard")
      .forEach((e) => e.parentNode.removeChild(e));
    showCards(terrorMovies);
  }
  if (e.target.classList.contains("Drama")) {
    const dramaMovies = totalMovies.filter(
      (movie) => movie.category === "Drama"
    );
    document
      .querySelectorAll(".movieCard")
      .forEach((e) => e.parentNode.removeChild(e));
    showCards(dramaMovies);
  }
  if (e.target.classList.contains("Accion")) {
    const accionMovies = totalMovies.filter(
      (movie) => movie.category === "Accion"
    );
    document
      .querySelectorAll(".movieCard")
      .forEach((e) => e.parentNode.removeChild(e));
    showCards(accionMovies);
  }
  if (e.target.classList.contains("Comedia")) {
    const comediaMovies = totalMovies.filter(
      (movie) => movie.category === "Comedia"
    );
    document
      .querySelectorAll(".movieCard")
      .forEach((e) => e.parentNode.removeChild(e));
    showCards(comediaMovies);
  }
});

document.addEventListener("DOMContentLoaded", showCards(totalMovies));
