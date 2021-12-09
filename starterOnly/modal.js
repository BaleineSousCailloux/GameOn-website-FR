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
const formData = document.querySelectorAll(".formData");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Issue 1 : close modal function
const crossToClose = document.getElementsByClassName("close"); //récupérer la class="close"
console.log("btn de fermeture :", crossToClose); // vérifier ce que renvoie ma recherche
function closeModal() {
  modalbg.style.display = "none";
}
// Issue 1 option : delay to close
let delayToClose;
function closeDelay() {
  delayToClose = setTimeout(closeModal, 120);
  
}
// Issue 1 : close modal form
crossToClose[0].addEventListener('click', closeDelay);
  

/*/ Issue 2 : validations
const firstName = document.getElementById("first").value;
let firstNameIsValid = false;
if (firstName = /^[A-Z|a-z|\-]{2,}$/g.test(value)) {
  console.log("prénom OK");
  } else {
    console.log("prénom incorrect");
  }
function resultPrenomIsValid(value) {
  return /^[A-Z|a-z|\-]{2,}$/g.test(value);
};
prenom.addEventListener("change", function(event) {
  if (isValid(event.target.value)) {
    console.log("prénom OK");
  } else {
    console.log("prénom incorrect");
  }
});
// event.target.value.length >= 2*/

// Error Messages to HTML
const errorMessage0 = document.createElement("span");
errorMessage0.style.display = 'none';
errorMessage0.style.color = 'red';
errorMessage0.style.fontSize = '13px';
formData[0].appendChild(errorMessage0).textContent = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
const errorMessage1 = document.createElement("span");
errorMessage1.style.display = 'none';
errorMessage1.style.color = 'red';
errorMessage1.style.fontSize = '13px';
formData[1].appendChild(errorMessage1).textContent = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
const errorMessage2 = document.createElement("span");
errorMessage2.style.display = 'none';
errorMessage2.style.color = 'red';
errorMessage2.style.fontSize = '13px';
formData[2].appendChild(errorMessage2).textContent = "Veuillez entrer une adresse email valide.";
const errorMessage3 = document.createElement("span");
errorMessage3.style.display = 'none';
errorMessage3.style.color = 'red';
errorMessage3.style.fontSize = '13px';
formData[3].appendChild(errorMessage3).textContent = "Vous devez entrer votre date de naissance.";
const errorMessage4 = document.createElement("span");
errorMessage4.style.display = 'none';
errorMessage4.style.color = 'red';
errorMessage4.style.fontSize = '13px';
formData[4].appendChild(errorMessage4).textContent = "Vous devez saisir un nombre.";
const errorMessage5 = document.createElement("span");
errorMessage5.style.display = 'none';
errorMessage5.style.color = 'red';
errorMessage5.style.fontSize = '13px';
formData[5].appendChild(errorMessage5).textContent = "Vous devez sélectionner au moins une ville.";
const errorMessage6 = document.createElement("span");
errorMessage6.style.display = 'none';
errorMessage6.style.color = 'red';
errorMessage6.style.fontSize = '13px';
const conditions = document.getElementById("conditions")
conditions.appendChild(errorMessage6).textContent = "Vous devez accepter nos conditions générales.";


// validation globale
const form = document.getElementById("form");
let firstName = document.getElementById("first").value;
let lastName = document.getElementById("last").value;
let email = document.getElementById("email").value;
let birthDate = document.getElementById("birthdate").value;
let quantity = document.getElementById("quantity").value;
let radio = document.getElementsByClassName("checkbox-input");
let checkConditions = document.getElementById("checkbox1");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let firstNameIsValid = false;
  if (firstName = /^[A-Z|a-z|\-]{2,}$/g.test(value)) {
    firstNameIsValid = true;
    console.log("prénom OK");
  } else {
    errorMessage0.style.display = 'block';
    console.log("prénom incorrect");
  }

  let lastNameIsValid = false;
  if (lastName = /^[A-Z|a-z|\-]{2,}$/g.test(value)) {
    lastNameIsValid = true;
    console.log("nom OK");
  } else {
    errorMessage1.style.display = 'block';
    console.log("nom incorrect");
  }

})