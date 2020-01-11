const body = document.querySelector('.main-page');
const menu = document.querySelector('.navigation');
const button = document.querySelector('.menu');

button.addEventListener('click', () => {
  body.classList.toggle('main-page--active');
  menu.classList.toggle('navigation--active');
  button.classList.toggle('menu--active');
});
