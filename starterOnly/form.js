// on crée la variable qui va contenir le formulaire complet
const form = document.querySelector('form');
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
// on crée la variable qui va contenir tous les boutons radio
const radios = document.querySelectorAll('.checkbox-input[type=radio]');
// on crée la variable qui va contenir la case des conditions générales
const conditionsGenerales = document.querySelector('#checkbox1');
const btnSubmit = document.querySelector('.btn-submit');

// On crée une variable contenant une fonction qui va vérifier tous les champs du formulaire
function validateInputs() {
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
  validateLocation();
  validateConditions();
  validateBirthdate();
}

// On crée une variable qui va contenir tous les messages d'erreur
const errorMessages = {
  lastNameError:
    'Veuillez entrer un nom comportant 2 caractères ou plus. Les chiffres ne sont pas autorisés.',
  firstNameError:
    'Veuillez entrer un prénom comportant 2 caractères ou plus. Les chiffres ne sont pas autorisés.',
  emailError: 'Veuillez entrer une adresse e-mail valide.',
  birthdateError: 'Veuillez entrer une date de naissance valide.',
  quantityError: 'Veuillez entrer un nombre valide.',
  locationError: 'Veuillez choisir une ville.',
  cguError: "Veuillez accepter les conditions d'utilisations.",
};

// Checks the first name
function validateFirst() {
  // console.log(first.value);
  // .value correspond à une propriété definie d'un élément en JS
  const firstLength = first.value.length;
  const regex = /^[a-zA-Z]{2,}$/;
  if (firstLength < 2 || regex.test(first.value) === false) {
    document.querySelector('.first-error').innerText =
      errorMessages.firstNameError;
    return false;
  }
  document.querySelector('.first-error').innerText = '';
  return true;
}

// Checks the last name
function validateLast() {
  const lastLength = last.value.length;
  const regex = /^[a-zA-Z]{2,}$/;
  if (lastLength < 2 || regex.test(last.value) === false) {
    document.querySelector('.last-error').innerText =
      errorMessages.lastNameError;
    return false;
  }
  document.querySelector('.last-error').innerText = '';
  return true;
}

// Checks if the user has typed a valid e-mail format
function validateEmail() {
  const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regex.test(email.value) === false) {
    document.querySelector('.email-error').innerText = errorMessages.emailError;
    return false;
  }
  document.querySelector('.email-error').innerText = '';
  return true;
}

function validateBirthdate() {
  const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  if (regex.test(birthdate.value) === false) {
    document.querySelector('.birthdate-error').innerText =
      errorMessages.birthdateError;
    return false;
  }
  document.querySelector('.birthdate-error').innerText = '';
  return true;
}

// Checks if the user has selected a quantity
function validateQuantity() {
  const regex = /^[0-9]{1,2}$/;
  if (regex.test(quantity.value) === false) {
    document.querySelector('.quantity-error').innerText =
      errorMessages.quantityError;
    return false;
  }
  document.querySelector('.quantity-error').innerText = '';
  return true;
}

// Checks if the user has selected a location
function validateLocation() {
  for (let radio of radios) {
    if (radio.checked === true) {
      document.querySelector('.location-error').innerText = '';
      return true;
    }
  }
  document.querySelector('.location-error').innerText =
    errorMessages.locationError;
  return false;
}

// Checks if the user has checked the cgu
function validateConditions() {
  if (conditionsGenerales.checked === true) {
    document.querySelector('.cgu-error').innerText = '';
    return true;
  }
  document.querySelector('.cgu-error').innerText = errorMessages.cguError;
  return false;
}

// On écoute le submit du formulaire et on lui fait executer la fonction validateForm
form.addEventListener('submit', (e) => {
  // Webpage not reloading after clicking on submit
  e.preventDefault();
  validateInputs();
  validateForm();
});

// Checks if the form is valid
function validateForm() {
  const formData = document.querySelectorAll('.formData');
  const textLabel = document.querySelector('.text-label');
  if (
    validateFirst() &&
    validateLast() &&
    validateEmail() &&
    validateQuantity() &&
    validateLocation() &&
    validateConditions() &&
    validateBirthdate() === true
  ) {
    for (const forms of formData) {
      forms.classList.add('hide');
    }
    textLabel.classList.add('hide');
    let div = document.createElement('div');
    document.querySelector('#reserve').appendChild(div);
    div.innerHTML = 'Votre reservation a bien été prise en compte';
    div.classList.add('reserve-success');
    btnSubmit.value = 'Fermer';
    btnSubmit.addEventListener('click', (e) => {
      closeModal();
      // resetForm();
    });
  }
}

// Resets the form
// function resetForm() {
//   const formData = document.querySelectorAll('.formData');
//   const textLabel = document.querySelector('.text-label');
//   for (const forms of formData) {
//     forms.classList.remove('hide');
//   }
//   textLabel.classList.remove('hide');
//   btnSubmit.value = "C'est parti";
// }
