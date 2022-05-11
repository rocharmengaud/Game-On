// Fonctions

function editNav() {
  var x = document.getElementById('myTopnav');
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

// Le formulaire doit être valide quand l'utilisateur envoie les données
const firstName = document.querySelector('first');
const lastName = document.querySelector('name');
const eMail = document.querySelector('email');
const birthDate = document.querySelector('birthdate');
const tournamentQuantity = document.querySelector('quantity');
const loc1 = document.querySelector('location1');
const loc2 = document.querySelector('location2');
const loc3 = document.querySelector('location3');
const loc4 = document.querySelector('location4');
const loc5 = document.querySelector('location5');
const loc6 = document.querySelector('location6');

// RegExp pour le format de la date et des nombres autorisés
const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;

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
