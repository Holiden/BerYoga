const page = document.querySelector('.main-page');
const modalLogin = document.querySelector('.js-login');
const modalIn = document.querySelector('.js-modalIn');
const modalUp = document.querySelector('.js-modalUp');
const buttonMenuLogin = document.querySelector('.js-buttonMenuLogin');
const buttonPreviewLogin = document.querySelector('.js-buttonPreviewLogin');
const buttonPricesIndividualLogin = document.querySelector('.js-buttonPricesIndividualLogin');
const buttonPricesBestLogin = document.querySelector('.js-buttonPricesBestLogin');
const buttonPricesClassLogin = document.querySelector('.js-buttonPricesClassLogin');
const buttonClose = document.querySelector('.js-buttonClose');
const buttonIn = document.querySelector('.js-buttonIn');
const buttonUp = document.querySelector('.js-buttonUp');
const buttonResetLoginIn = document.querySelector('.js-buttonResetLoginIn');
const buttonResetLoginUp = document.querySelector('.js-buttonResetLoginUp');
const buttonShowPasswordIn = document.querySelector('.js-buttonShowPasswordIn');
const buttonShowPasswordUp = document.querySelector('.js-buttonShowPasswordUp');
const buttonShowPasswordConfirmUp = document.querySelector('.js-buttonShowPasswordConfirmUp');
const buttonSubmitIn = document.querySelector('.js-buttonSubmitIn');
const buttonSubmitUp = document.querySelector('.js-buttonSubmitUp');
const inputLoginIn = document.querySelector('.js-inputLoginIn');
const inputPasswordIn = document.querySelector('.js-inputPasswordIn');
const inputLoginUp = document.querySelector('.js-inputLoginUp');
const inputPasswordUp = document.querySelector('.js-inputPasswordUp');
const inputPasswordConfirmUp = document.querySelector('.js-inputPasswordConfirmUp');

buttonMenuLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
  page.style.overflow = 'hidden';
});

buttonPreviewLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
  page.style.overflow = 'hidden';
});

buttonPricesIndividualLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
  page.style.overflow = 'hidden';
});

buttonPricesBestLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
  page.style.overflow = 'hidden';
});

buttonPricesClassLogin.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
  page.style.overflow = 'hidden';
});

buttonClose.addEventListener('click', () => {
  modalLogin.classList.remove('modal--active');
  page.style.overflow = 'auto';
});

buttonSubmitIn.addEventListener('click', (event) => {
  event.preventDefault();

  modalLogin.classList.remove('modal--active');
  page.style.overflow = 'auto';
});

buttonSubmitUp.addEventListener('click', (event) => {
  event.preventDefault();

  modalLogin.classList.remove('modal--active');
  page.style.overflow = 'auto';
});

inputLoginIn.addEventListener('keyup', () => {
  if (inputLoginIn.value.length != 0) {
    buttonResetLoginIn.style.visibility = 'visible';
  } else {
    buttonResetLoginIn.style.visibility = 'hidden';
  }
});

buttonResetLoginIn.addEventListener('click', (event) => {
  event.preventDefault();

  inputLoginIn.value = '';
  buttonResetLoginIn.style.visibility = 'hidden';
});

inputPasswordIn.addEventListener('keyup', () => {
  if (inputPasswordIn.value.length != 0) {
    buttonShowPasswordIn.style.visibility = 'visible';
  } else {
    buttonShowPasswordIn.style.visibility = 'hidden';
  }
});

buttonShowPasswordIn.addEventListener('click', () => {
  if (inputPasswordIn.type === 'password') {
    inputPasswordIn.setAttribute('type', 'text');
    buttonShowPasswordIn.classList.toggle('button--show');
    buttonShowPasswordIn.classList.toggle('button--dontshow');
  } else {
    inputPasswordIn.setAttribute('type', 'password');
    buttonShowPasswordIn.classList.toggle('button--show');
    buttonShowPasswordIn.classList.toggle('button--dontshow');
  }
});

inputLoginUp.addEventListener('keyup', () => {
  if (inputLoginUp.value.length != 0) {
    buttonResetLoginUp.style.visibility = 'visible';
  } else {
    buttonResetLoginUp.style.visibility = 'hidden';
  }
});

buttonResetLoginUp.addEventListener('click', (event) => {
  event.preventDefault();

  inputLoginUp.value = '';
  buttonResetLoginUp.style.visibility = 'hidden';
});

inputPasswordUp.addEventListener('keyup', () => {
  if (inputPasswordUp.value.length != 0) {
    buttonShowPasswordUp.style.visibility = 'visible';
  } else {
    buttonShowPasswordUp.style.visibility = 'hidden';
  }
});

buttonShowPasswordUp.addEventListener('click', () => {
  if (inputPasswordUp.type === 'password') {
    inputPasswordUp.setAttribute('type', 'text');
    buttonShowPasswordUp.classList.toggle('button--show');
    buttonShowPasswordUp.classList.toggle('button--dontshow');
  } else {
    inputPasswordUp.setAttribute('type', 'password');
    buttonShowPasswordUp.classList.toggle('button--show');
    buttonShowPasswordUp.classList.toggle('button--dontshow');
  }
});

inputPasswordConfirmUp.addEventListener('keyup', () => {
  if (inputPasswordConfirmUp.value.length != 0) {
    buttonShowPasswordConfirmUp.style.visibility = 'visible';
  } else {
    buttonShowPasswordConfirmUp.style.visibility = 'hidden';
  }
});

buttonShowPasswordConfirmUp.addEventListener('click', () => {
  if (inputPasswordConfirmUp.type === 'password') {
    inputPasswordConfirmUp.setAttribute('type', 'text');
    buttonShowPasswordConfirmUp.classList.toggle('button--show');
    buttonShowPasswordConfirmUp.classList.toggle('button--dontshow');
  } else {
    inputPasswordConfirmUp.setAttribute('type', 'password');
    buttonShowPasswordConfirmUp.classList.toggle('button--show');
    buttonShowPasswordConfirmUp.classList.toggle('button--dontshow');
  }
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
