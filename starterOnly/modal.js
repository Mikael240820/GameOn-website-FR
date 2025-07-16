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
const modalCloseBtn = document.querySelectorAll(".btn-close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

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

  const displayedErrors = document.querySelectorAll('.formData[data-error-visible="true"]');
  displayedErrors.forEach(error => error.dataset.errorVisible = false);

  function markError(inputName) {
    const input = document.querySelector(`input[name="${inputName}"]`);
    input.closest('.formData').dataset.errorVisible = true;
    errors.push(inputName);
  }

  // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (!this.first.value || this.first.value.length < 2) {
    markError("first");
  }

  // Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  if (!this.last.value || this.last.value.length < 2) {
    markError("last");
  }

  // L'adresse électronique est valide.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!this.email.value || !emailRegex.test(this.email.value)) {
    markError("email");
  }

  // La date anniversaire est valide.
  if (!this.birthdate.value) {
    markError("birthdate");
  } else {
    const birthDate = new Date(this.birthdate.value);
    const today = new Date();
    if (birthDate > today) {
      markError("birthdate");
    }
  }

  // Pour le nombre de concours, une valeur numérique est saisie.
  if (!this.quantity.value || isNaN(this.quantity.value) || this.quantity.value < 0) {
    markError("quantity");
  }

  // Un bouton radio est sélectionné.
  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    markError("location");
  }

  // La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  const cguChecked = document.querySelector('input[name="cgu"]:checked');
  if (!cguChecked) {
    markError("cgu");
  }

  if (errors.length === 0) {
    document.querySelector("#reserve-form").classList.add("hide");
    document.querySelector("#reserve-success").classList.remove("hide");
  }

  return false;
}

function resetReservedForm() {
  const form = document.querySelector('form[name="reserve"]');
  form.reset();
  
  document.querySelector("#reserve-success").classList.add("hide");
  document.querySelector("#reserve-form").classList.remove("hide");
}
