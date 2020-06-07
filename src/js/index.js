import "../scss/main.scss";
import moment from "moment";

/* place your code below */

console.log("HELLO 🚀");
const firstName = "Martyn";
const age = 32;

console.log(`Cześć! To strona nauki WTF. Notatki przygotowała ${firstName}.`);

const task = document.querySelector(".task-js");

function hello(firstName, age) {
  console.log(
    `Cześć! To strona nauki WTF. Notatki przygotowała ${firstName} i ma ${age} lata.`
  );
}
hello(firstName, age);

const hamburger = document.querySelector(".navigation__hamburger-menu--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

const darkmode = document.querySelector(".button--dark-mode");

darkmode.addEventListener("click", () => {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "body-mode--light" ? "body-mode--dark" : "body-mode--light";
});

function toggleDarkLight() {
  var body = document.getElementsByClassName("page-background");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
