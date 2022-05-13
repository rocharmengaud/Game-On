// On crée une variable contenant une fonction qui va vérifier tous les champs du formulaire
const validateInputs = () => {
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
  validateLocation();
  validateConditions();
};

// on crée la variable qui va contenir le formulaire complet
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  // on fait en sorte que la page ne se refresh pas lorsque l'on clique sur submit
  e.preventDefault();
  validateInputs();
});

// Checks the first name
function validateFirst() {
  const first = document.querySelector('#first');
  // console.log(first.value);
  // .value correspond à une propriété definie d'un élément en JS
  const firstLength = first.value.length;
  if (firstLength < 2 || firstLength === '') {
    document.querySelector('.first-error').innerHTML =
      'Veuillez entrer un prénom valide';
  } else {
    document.querySelector('.first-error').innerHTML = '';
  }
}

// Checks the last name
function validateLast() {
  const last = document.querySelector('#last');
  const lastLength = last.value.length;
  if (lastLength < 2 || lastLength === '') {
    document.querySelector('.last-error').innerHTML =
      'Veuillez entrer un nom valide';
  } else {
    document.querySelector('.last-error').innerHTML = '';
  }
}

// Checks if the user has typed a valid e-mail format
function validateEmail() {
  const email = document.querySelector('#email');
  let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regex.test(email.value) === false) {
    document.querySelector('.email-error').innerHTML =
      'Veuillez entrer une adresse mail valide';
  } else {
    document.querySelector('.email-error').innerHTML = '';
  }
}

// Checks if the user has selected a quantity
function validateQuantity() {
  const quantity = document.querySelector('#quantity');
  let regex = /^[0-9]{1,2}$/;
  if (regex.test(quantity.value) === false) {
    document.querySelector('.quantity-error').innerHTML =
      'Veuillez sélectionner un chiffre ou un nombre';
  } else {
    document.querySelector('.quantity-error').innerHTML = '';
  }
}

// on crée la variable qui va contenir tous les boutons radio
const radios = document.querySelectorAll('.checkbox-input[type=radio]');

// Checks if the user has selected a location
function validateLocation() {
  for (let radio of radios) {
    if (radio.checked === true) {
      document.querySelector('.location-error').innerHTML = '';
      return true;
    }
  }
  document.querySelector('.location-error').innerHTML =
    'Veuillez sélectionner une ville';
  return false;
}

// on crée la variable qui va contenir la case des conditions générales
const conditionsGenerales = document.querySelector('#checkbox1');

// Checks if the user has checked the cgu
function validateConditions() {
  if (conditionsGenerales.checked === true) {
    console.log('ok');
    return true;
  }
  return false;
}
