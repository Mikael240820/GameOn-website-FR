function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn && modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// validate modal form
function validate() {
  let errors = [];

  // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (!this.first.value || this.first.value.length < 2) {
    errors.push("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }

  // Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  if (!this.last.value || this.last.value.length < 2) {
    errors.push("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  // L'adresse électronique est valide.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!this.email.value || !emailRegex.test(this.email.value)) {
    errors.push("Vous devez entrer une adresse électronique valide.");
  }

  // La date anniversaire est valide.
  if (!this.birthdate.value) {
    errors.push("Vous devez entrer votre date de naissance.");
  } else {
    const birthDate = new Date(this.birthdate.value);
    const today = new Date();
    if (birthDate > today) {
      errors.push("Votre date de naissance ne peut pas être dans le futur.");
    }
  }

  // Pour le nombre de concours, une valeur numérique est saisie.
  if (!this.quantity.value || isNaN(this.quantity.value) || this.quantity.value < 0) {
    errors.push("Vous devez choisir une option.");
  }

  // Un bouton radio est sélectionné.
  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    errors.push("Vous devez choisir une option.");
  }

  // La case des conditions générales est cochée.
  const cguChecked = document.querySelector('input[name="cgu"]:checked');
  if (!cguChecked) {
    errors.push("Vous devez vérifier que vous acceptez les termes et conditions.");
  }

  if (errors.length > 0) {
    alert("Veuillez corriger les erreurs suivantes :\n\n• " + errors.join("\n• "));
    return false;
  }

  return true;
}
