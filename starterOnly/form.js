// on crée la variable qui va contenir le formulaire complet
const form = document.querySelector('form');

// On crée une variable contenant une fonction qui va vérifier tous les champs du formulaire
const validateInputs = () => {
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
  validateLocation();
  validateConditions();
  validateBirthdate();
};

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
  const first = document.querySelector('#first');
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
  const last = document.querySelector('#last');
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
  const email = document.querySelector('#email');
  const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regex.test(email.value) === false) {
    document.querySelector('.email-error').innerText = errorMessages.emailError;
    return false;
  }
  document.querySelector('.email-error').innerText = '';
  return true;
}

function validateBirthdate() {
  const birthdate = document.querySelector('#birthdate');
  const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  if (regex.test(birthdate.value) === false) {
    console.log(
      birthdate.value,
      regex.test('25-02-5252'),
      regex.test(birthdate.value)
    );
    document.querySelector('.birthdate-error').innerText =
      errorMessages.birthdateError;
    return false;
  }
  document.querySelector('.birthdate-error').innerText = '';
  return true;
}

// Checks if the user has selected a quantity
function validateQuantity() {
  const quantity = document.querySelector('#quantity');
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
  // on crée la variable qui va contenir tous les boutons radio
  const radios = document.querySelectorAll('.checkbox-input[type=radio]');
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
  // on crée la variable qui va contenir la case des conditions générales
  const conditionsGenerales = document.querySelector('#checkbox1');
  if (conditionsGenerales.checked === true) {
    document.querySelector('.cgu-error').innerText = '';
    return true;
  }
  document.querySelector('.cgu-error').innerText = errorMessages.cguError;
  return false;
}

form.addEventListener('submit', (e) => {
  // Webpage not reloading after clicking on submit
  e.preventDefault();
  validateInputs();
  validateForm();
});

// Checks if the form is valid
function validateForm() {
  if (
    validateFirst() &&
    validateLast() &&
    validateEmail() &&
    validateQuantity() &&
    validateLocation() &&
    validateConditions() &&
    validateBirthdate() === true
  ) {
    closeModal();
    alert('Merci ! Votre réservation a été reçue');
  }
}
