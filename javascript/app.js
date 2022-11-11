const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

const carrusel = document.querySelector("#galeria__container");

let counter = 0;
let dist = 100 / 3;

function seleccion(counter) {
  if (counter === 1) {
    carrusel.style.transform = `translatex(-${dist}%)`;
  } else if (counter === 2) {
    carrusel.style.transform = `translatex(-${dist * 2}%)`;
  } else if (counter === 0) {
    carrusel.style.transform = `translatex(-${0}%)`;
  }
}

function next() {
  counter++;

  if (counter === 3) {
    counter = 0;
  }
  seleccion(counter);

  return console.log(counter);
}

function prev() {
  counter--;

  if (counter === -1) {
    counter = 2;
  }
  seleccion(counter);

  return console.log(counter);
}

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
