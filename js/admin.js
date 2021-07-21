import { navbar, adminHTML, cardHTML } from "./funciones.js";
navbar();
adminHTML();

let destacadas = [];
const panel = document.querySelector(".panelOptions");
const saveBtn = document.querySelector("#saveMovies");
let totalMovies = JSON.parse(localStorage.getItem("peliculas"));

class Movies {
  constructor(name, category, img, description) {
    this.name = name;
    this.category = category;
    this.url = img;
    this.description = description;
    this.id = Date.now();
  }
}

saveBtn.addEventListener("click", (e) => {
  const inputName = document.querySelector("#inputName").value;
  const categorySelect = document.querySelector("#categorySelect").value;
  const inputImg = document.querySelector("#inputImg").value;
  const description = document.querySelector("#descriptionInput").value;
  const movie = new Movies(inputName, categorySelect, inputImg, description);
  let totalMovies = JSON.parse(localStorage.getItem("peliculas"));
  totalMovies.unshift(movie);
  localStorage.setItem("peliculas", JSON.stringify(totalMovies));
  window.location.href = "./admin.html";
});

function showCards(movies) {
  const list = document.querySelector(".list");
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movieCard");
    card.id = `${movie.id}`;
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

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("bi-pen-fill")) {
  }
  if (e.target.classList.contains("bi-trash-fill")) {
    const id =
      e.target.parentElement.parentElement.parentElement.parentElement.id;
    const movies = JSON.parse(localStorage.getItem("peliculas"));
    const newMovies = movies.filter((movie) => movie.id != id);
    localStorage.getItems("peliculas", JSON.stringify(newMovies));
  }
  if (e.target.classList.contains("bi-star")) {
    const id =
      e.target.parentElement.parentElement.parentElement.parentElement.id;
    destacar(id);
  }
});

function destacar(id) {
  const movies = JSON.parse(localStorage.getItem("peliculas"));
  const destacada = movies.find((movie) => movie.id == id);
  destacadas.unshift(destacada);
  localStorage.setItem("destacadas", JSON.stringify(destacadas));
  const star = document.querySelector(".bi-star");
  star.style.color = "yellow";
}
