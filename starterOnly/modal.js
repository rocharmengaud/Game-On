// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelector('.close');
const formData = document.querySelectorAll('.formData');

// MODALE
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  // ici on aurait pu écrire
  // document.querySelector('.bground'); équivaut à : const modalbg = document.querySelector('.bground');
  modalbg.style.display = 'block';
}

// close modal event
modalClose.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
