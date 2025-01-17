function editNav() {
  const x = document.querySelector('#myTopnav');
  if (x === null) return;
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

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
  modalbg.style.display = 'block';
}

// close modal event
modalClose.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
