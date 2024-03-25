const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  // Ici, il faudra appelr l'API pour vérifier les crédentials en BDD

  if (EmailInput.value == "test@gmail.com" && PasswordInput.value == "123") {
    // alert("Vous êtes connecté");

    // Il faudra récupérer le vrai token
    const token =
      // faux token
      "cvdfbdfbfdlbldflgldgbdfmlgbdfdsflkdpokfpmzkfpmkzb";
    setToken(token);

    // Placer ce token en cookie

    setCookie("RoleCookieName", "admin", 7);
    window.location.replace("/");
  } else {
    EmailInput.classList.add("is-invalid");
    PasswordInput.classList.add("is-invalid");
  }
}
