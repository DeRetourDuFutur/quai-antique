import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "../pages/home.html"),
  new Route("/Galerie", "Galerie", "../pages/galerie.html"),
  new Route("/Menus", "Nos Menus", "../pages/menus.html"),
  new Route(
    "/AllResa",
    "Vos réservations",
    "../pages/reservations/all-resa.html"
  ),
  new Route("/Reserver", "Réserver", "../pages/reservations/new-resa.html"),
  new Route("/Compte", "Mon Compte", "../pages/auth/account.html"),
  new Route("/SignIn", "Connexion", "../pages/auth/signin.html"),
  new Route(
    "/SignUp",
    "Inscription",
    "../pages/auth/signup.html",
    "../js/auth/signup.js"
  ),
  new Route(
    "/editPassword",
    "Modification du mot de passe",
    "../pages/auth/edit-password.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
