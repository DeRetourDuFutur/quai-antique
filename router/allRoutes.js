import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/Galerie", "Galerie", "/pages/galerie.html"),
  new Route("/Menus", "Nos Menus", "/pages/menus.html"),
  new Route("/Reservation", "Réservation", "/pages/reservation.html"),
  new Route("/Compte", "Mon Compte", "/pages/compte.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
