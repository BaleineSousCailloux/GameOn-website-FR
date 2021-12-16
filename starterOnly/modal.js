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

// Issue 4 option (afin d'agir sur ce bouton)

const endBtn = document.getElementById("end-btn");


// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() { // fonction améliorée pour "nettoyer" la modale en cas de soumission d'un deuxième formulaire
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
  delayToClose = setTimeout(closeModal, 500);
}
// global validation option
function autoCloseDelay() {
  delayToClose = setTimeout(closeModal, 3500);
}

// Issue 1 : close modal form

crossToClose[0].addEventListener('click', manualCloseDelay);

// Issue 3 : Error Messages to HTML

const styleErrorMessage = (element) => { // fonction générique pour permettre le chgt de style de tous les messages
  element.style.display = 'none';
  element.style.color = '#fe142f';
  element.style.fontSize = '13px';
};

const errorMessage0 = document.createElement("span");
styleErrorMessage(errorMessage0);
formData[0].appendChild(errorMessage0).textContent = "Prénom absent ou invalide.";
const errorMessage1 = document.createElement("span");
styleErrorMessage(errorMessage1);
formData[1].appendChild(errorMessage1).textContent = "Nom absent ou invalide.";
const errorMessage2 = document.createElement("span");
styleErrorMessage(errorMessage2);
formData[2].appendChild(errorMessage2).textContent = "Veuillez entrer une adresse email valide.";
const errorMessage3 = document.createElement("span");
styleErrorMessage(errorMessage3);
formData[3].appendChild(errorMessage3).textContent = "Vous devez avoir plus de 12 ans, et être vivant !";
const errorMessage4 = document.createElement("span");
styleErrorMessage(errorMessage4);
formData[4].appendChild(errorMessage4).textContent = "Vous devez saisir un nombre cohérent.";
const errorMessage5 = document.createElement("span");
styleErrorMessage(errorMessage5);
formData[5].appendChild(errorMessage5).textContent = "Vous devez indiquer la ville de participation.";

const errorMessage6 = document.createElement("span");
styleErrorMessage(errorMessage6);
/*errorMessage6.style.display = 'none';
errorMessage6.style.color = 'red';
errorMessage6.style.fontSize = '13px'; ////// amélioré par la fonction styleErrorMessage = dry */

const conditions = document.getElementById("conditions")
conditions.appendChild(errorMessage6).textContent = "Vous devez accepter les conditions générales.";

//Issue 4 : success message

const successMessage = document.createElement("span");
successMessage.style.display = 'none';
successMessage.style.color = 'green';
successMessage.style.fontSize = '20px';
successMessage.style.textAlign = 'center';
const form = document.getElementById("form");
form.appendChild(successMessage).textContent = "Merci ! Votre demande de participation est bien enregistrée.";

// Issue 2 : option gestion de l'âge
// récupération date du jour et formatage nécesssaire
let date = new Date();
function dateFormated(chain) {
  let newDate = new Date(chain).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  })
  return newDate;
};
let today = dateFormated(date);
console.log(today);

// validation globale

form.addEventListener("submit", function (event) { // ouvrir l'écouteur d'événement
  event.preventDefault(); // supprimer le fonctionnement par défaut du btn submit

  // récupérer l'ensemble des saisies utilisateur
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthDate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let radio = document.querySelector('input[name="location"]:checked')?.value;
  let checkConditions = document.getElementById("checkbox1").checked;

  console.log(birthDate);
  let diffAge = (date - new Date(birthDate)) / (1000 * 60 * 60 * 24 * 365);
  console.log(diffAge);
  //Issue 2 : data validations

  let firstNameIsValid = false;
  if (/^[A-Z|a-z|\-]{2,}$/g.test(firstName)) {
    firstNameIsValid = true;
    errorMessage0.style.display = 'none';
    console.log("prénom OK"); // vérification console
  } else {
    errorMessage0.style.display = 'block'; // appel du message d'erreur
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
  if (diffAge >= 12 && diffAge <= 120) {
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
  if (radio != null) {
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

  let formIsValid = false; // validation globale de la participation
  if (firstNameIsValid && lastNameIsValid && emailIsValid && birthDateIsValid && quantityIsValid && radioIsValid && checkConditionsIsValid) {
    formIsValid = true;
    autoCloseDelay(); // rappel de la fonction de clotûre de la modale automatique
    successMessage.style.display = 'block';
    endBtn.setAttribute('disabled', true); // bloquer l'usage du bouton pour éviter les erreurs potentielles
    endBtn.style.backgroundColor = 'grey';
    form.reset(); // vider le formulaire
  };


})