// functions to validate inputs
function validate() {
  if (
    firstValidation() === true &&
    emailValidation() === true &&
    quantityValidation() === true &&
    locationValidation() === true
  ) {
    return true;
  }
  return false;
}

function firstValidation() {
  let inputValue = document.getElementById('first').value;
  if (inputValue !== null && inputValue.length > 2) return true;
  else return false;
}

// ici on appelle la fonction firstValidation
document.querySelector('#first').addEventListener('keydown', (event) => {
  if (firstValidation() === false) {
    document.querySelector('.first-error').innerHTML =
      'Veuillez entrer un nom valide';
  } else {
    document.querySelector('.first-error').innerHTML = '';
    // ici on effaçe le texte 'Veuillez entrer un nom valide'
  }
});

function emailValidation() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  let inputValue = document.getElementById('email').value;
  return regex.test(inputValue);
}

document.querySelector('#email').addEventListener('keydown', (event) => {
  if (emailValidation() === false) {
    document.querySelector('.email-error').innerHTML =
      'Veuillez entrer une adresse email valide';
  } else {
    document.querySelector('.email-error').innerHTML = '';
  }
});

function quantityValidation() {
  let regex = /^[0-9]+$/;
  let inputValue = document.getElementById('quantity').value;
  return regex.test(inputValue);
}

function locationValidation() {
  let radioButtons = document.querySelectorAll('.checkbox-input[type=radio]');
  for (let radio of radioButtons) {
    if (radio.checked === true) return true;
  }
  return false;
}
// ce que la fonction va renvoyer par défaut (c'est pour ca qu'il n'y a pas de else)
