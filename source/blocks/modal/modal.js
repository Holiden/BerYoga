const modalLogin = document.querySelector('.js-login');
const linkLogin = document.querySelector('.js-link-login');
const buttonClose = document.querySelector('.js-modal-close');
const buttonShow = document.querySelector('.js-buttonShow');
const buttonReset = document.querySelector('.js-buttonReset');
const buttonSubmit = document.querySelector('.js-buttonSubmit');
const fieldPassword = document.querySelector('.js-inputPassword');
const fieldText = document.querySelector('.js-inputText');

linkLogin.addEventListener('click', (event) => {
  modalLogin.classList.toggle('modal--active');
});

buttonClose.addEventListener('click', () => {
  modalLogin.classList.remove('modal--active');
});

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  modalLogin.classList.remove('modal--active');
});

fieldPassword.addEventListener('keyup', () => {
  if (fieldPassword.value.length != 0) {
    buttonShow.style.visibility = 'visible';
  } else {
    buttonShow.style.visibility = 'hidden';
  }
});

buttonShow.addEventListener('click', () => {
  if (fieldPassword.type === 'password') {
    fieldPassword.setAttribute('type', 'text');
    buttonShow.classList.toggle('button--show');
    buttonShow.classList.toggle('button--dontshow');
  } else {
    fieldPassword.setAttribute('type', 'password');
    buttonShow.classList.toggle('button--show');
    buttonShow.classList.toggle('button--dontshow');
  }
});

fieldText.addEventListener('keyup', () => {
  if (fieldText.value.length != 0) {
    buttonReset.style.visibility = 'visible';
  }
});

buttonReset.addEventListener('click', (event) => {
  event.preventDefault();

  fieldText.value = '';
  buttonReset.style.visibility = 'hidden';
});
