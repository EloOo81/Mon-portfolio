function toggleHoraires() {
    var horaires = document.getElementById("horaires");
    if (horaires.style.display === "none") {
        horaires.style.display = "block";
    } else {
        horaires.style.display = "none";
    }
}
var avaListe = [
    "Sophie M. : Accueil au top résultat magnifique, je recommande !",
    "Laura T. : Equipes très professionnelle merci pour votre travail !",
    "Leila M. : Résultats sublime et un accueuil super",
];
function afficherAvis() {
    var index = Math.floor(Math.random() * avaListe.length);
    document.getElementById("AvisAleatoire").innerText = avaListe[index];
}
const heure = new Date().getHours();
let message = "";

if (heure < 18) {
    message = "Bonjour, bienvenue chez L'Atelier Capilaire !";
    } else {
    message = "Bonsoir, bienvenue chez L'Atelier Capilaire !";
    }
    document.querySelector("h1").insertAdjacentHTML("afterend", "<p>" + message + </p>);
const formRdv = document.getElementById("form-rdv");
const messageConfirmation = document.getElementById("message-confirmation");

formRdv.addEventListener("submit" , function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const heure = document.getElementById("heure").value;

    messageConfirmation.textContent = "Merci " + nom + " ! Votre demande de rendez-vous pour un " + service + " le " + date + "a" + heure +" a bien été envoyée.";
    messageConfirmation.style.color = "green";

    formRdv.reset();
});
    
