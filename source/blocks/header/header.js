const menu = document.querySelector('.navigation');
const button = document.querySelector('.menu');

button.addEventListener('click', () => {
  menu.classList.toggle('navigation--active');
  button.classList.toggle('menu--active');
});
