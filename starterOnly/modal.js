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

// Issue 4 option

const endBtn = document.getElementById("end-btn");




// launch modal event
modalBtn[0].addEventListener("click", launchModal);

  // launch modal form

function launchModal() {
  successMessage.style.display = 'none';
  endBtn.style.backgroundColor = '#fe142f';
  endBtn.removeAttribute('disabled');
  modalbg.style.display = 'block';
}


// Issue 1 : close modal function

const crossToClose = document.getElementsByClassName("close"); //récupérer la class="close"
console.log("btn de fermeture :", crossToClose); // vérifier ce que renvoie ma recherche
function closeModal() {
  modalbg.style.display = 'none';
}

// Issue 1 option : delay to close

let delayToClose;
function manualCloseDelay() {
  delayToClose = setTimeout(closeModal, 120);
}
// global validation option
function autoCloseDelay() {
  delayToClose = setTimeout(closeModal, 3000);
}

// Issue 1 : close modal form

crossToClose[0].addEventListener('click', manualCloseDelay);

// Issue 3 : Error Messages to HTML

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

//Issue 4 : success message

const successMessage = document.createElement("span");
successMessage.style.display = 'none';
successMessage.style.color = 'green';
successMessage.style.fontSize = '20px';
successMessage.style.textAlign = 'center';
const form = document.getElementById("form");
form.appendChild(successMessage).textContent = "Merci pour votre participation !";

// validation globale

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthDate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let radio = document.querySelector('input[name="location"]:checked')?.value;
  let checkConditions = document.getElementById("checkbox1").checked;

  //Issue 2 : data validations

  let firstNameIsValid = false;
  if (/^[A-Z|a-z|\-]{2,}$/g.test(firstName)) {
    firstNameIsValid = true;
    errorMessage0.style.display = 'none';
    console.log("prénom OK");
  } else {
    errorMessage0.style.display = 'block';
    console.log("prénom incorrect");
  }

  let lastNameIsValid = false;
  if (/^[A-Z|a-z|\-]{2,}$/g.test(lastName)) {
    lastNameIsValid = true;
    errorMessage1.style.display = 'none';
    console.log("nom OK");
  } else {
    errorMessage1.style.display = 'block';
    console.log("nom incorrect");
  }

  let emailIsValid = false;
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.trim().toLowerCase())) {
    emailIsValid = true;
    errorMessage2.style.display = 'none';
    console.log("email OK");
  } else {
    errorMessage2.style.display = 'block';
    console.log("email incorrect");
  }

  let birthDateIsValid = false;
  if (/[^A-Z|a-z]$/g.test(birthDate)) {
    birthDateIsValid = true;
    errorMessage3.style.display = 'none';
    console.log("date de naissance OK");
  } else {
    errorMessage3.style.display = 'block';
    console.log("date de naissance incorrecte");
  }

  let quantityIsValid = false;
  if (/^[0-9]{1,}$/g.test(quantity) && quantity <= 99) {
    quantityIsValid = true;
    errorMessage4.style.display = 'none';
    console.log("nombre de tournois OK");
  } else {
    errorMessage4.style.display = 'block';
    console.log("nombre de tournois absent");
  }

  let radioIsValid = false;
  if (radio != null || (quantityIsValid = true && quantity == 0 && radio == null)) {
    radioIsValid = true;
    errorMessage5.style.display = 'none';
    console.log("ville OK");
  } else {
    errorMessage5.style.display = 'block';
    console.log("ville non indiquée");
  }

  let checkConditionsIsValid = false;
  if (checkConditions == true) {
    checkConditionsIsValid = true;
    errorMessage6.style.display = 'none';
    console.log("conditions générales OK");
  } else {
    errorMessage6.style.display = 'block';
    console.log("conditions générales non acceptées");
  }

  let formIsValid = false;
  if (firstNameIsValid == true && lastNameIsValid == true && emailIsValid == true && birthDateIsValid == true && quantityIsValid == true && radioIsValid == true && checkConditionsIsValid ==true) {
    formIsValid = true;
    autoCloseDelay();
    successMessage.style.display = 'block';
    endBtn.setAttribute('disabled', true);
    endBtn.style.backgroundColor = 'grey';
    form.reset();
  };

})