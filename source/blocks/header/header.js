const body = document.querySelector('.main-page');
const menu = document.querySelector('.main-header__navigation');
const button = document.querySelector('.menu');

button.addEventListener('click', () => {
  body.classList.toggle('main-page--active');
  menu.classList.toggle('main-header__navigation--active');
  button.classList.toggle('menu--active');
});
