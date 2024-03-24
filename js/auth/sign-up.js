// Implémenter le JS de ma page
// Vérification des champs du formulaire

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inpuPassword = document.getElementById("PasswordInput");
const inputConfirmPassword = document.getElementById("PasswordConfirmInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);

// const text =
//   "Bonjour, voici mon adresse e-mail : contact@example.com et une autre adresse : info@exemple.com";
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const matche = text.match(emailRegex);
// if (matche) {
//   console.log("Adresse e-mail valide !");
// } else {
//   console.log("Adresse e-mail invalide !");
// }

// Fonction permettant de valider le formulaire
function validateForm() {
  const nomOK = validateRequired(inputNom);
  const prenomOK = validateRequired(inputPrenom);
  const emailOK = validateRequired(inputEmail);
  const passwordOK = validatePassword(inputPassword);

  if (nomOK && prenomOK && emailOK && passwordOK) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateMail(input) {
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validatePassword(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}
