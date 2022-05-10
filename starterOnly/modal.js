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
const formData = document.querySelectorAll('.formData');
// On sélectionne l'élement avec la classe .close
const closeBtn = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal form event
// Lorsque l'utilisateur clique sur le bouton "fermer", la modale se ferme
closeBtn.addEventListener('click', (closeModal) => {
  modalbg.style.display = 'none';
});

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}
