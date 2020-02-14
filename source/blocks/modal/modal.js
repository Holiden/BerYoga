const modalLogin = document.querySelector('.js-login');
const modalIn = document.querySelector('.js-modalIn');
const modalUp = document.querySelector('.js-modalUp');
const buttonMenuLogin = document.querySelector('.js-buttonMenuLogin');
const buttonPreviewLogin = document.querySelector('.js-buttonPreviewLogin');
const buttonPricesIndividualLogin = document.querySelector('.js-buttonPricesIndividualLogin');
const buttonPricesBestLogin = document.querySelector('.js-buttonPricesBestLogin');
const buttonPricesClassLogin = document.querySelector('.js-buttonPricesClassLogin');
const buttonClose = document.querySelector('.js-buttonClose');
const buttonShow = document.querySelector('.js-buttonShow');
const buttonReset = document.querySelector('.js-buttonReset');
const buttonSubmit = document.querySelector('.js-buttonSubmit');
const buttonIn = document.querySelector('.js-buttonIn');
const buttonUp = document.querySelector('.js-buttonUp');
const fieldText = document.querySelector('.js-inputText');
const fieldPassword = document.querySelector('.js-inputPassword');

buttonMenuLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
});

buttonPreviewLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
});

buttonPricesIndividualLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
});

buttonPricesBestLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
});

buttonPricesClassLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
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
  } else {
    buttonReset.style.visibility = 'hidden';
  }
});

buttonReset.addEventListener('click', (event) => {
  event.preventDefault();

  fieldText.value = '';
  buttonReset.style.visibility = 'hidden';
});

buttonUp.addEventListener('click', () => {
  buttonIn.classList.toggle('modal__tab--active');
  buttonUp.classList.toggle('modal__tab--active');
  modalIn.classList.toggle('modal__sign-in--active');
  buttonIn.removeAttribute('disabled');
  modalUp.classList.toggle('modal__sign-up--active');
  buttonUp.setAttribute('disabled', 'true');
});

buttonIn.addEventListener('click', () => {
  buttonUp.classList.toggle('modal__tab--active');
  buttonIn.classList.toggle('modal__tab--active');
  modalIn.classList.toggle('modal__sign-in--active');
  buttonUp.removeAttribute('disabled');
  modalUp.classList.toggle('modal__sign-up--active');
  buttonIn.setAttribute('disabled', 'true');
});
