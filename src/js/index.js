import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')
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

hamburger.addEventListener('click', () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle('navigation--open');
});


