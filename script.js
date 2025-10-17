const nom = "Evan";
console.log(nom); // Affiche "Evan"

let age = 16;
console.log(age); // Affiche 16


if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans."); // affiche "Accès interdit aux moins de 13 ans." si age < 13

} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado."); // affiche "Vous pouvez accéder à la section ado." si age < 18

} else {
    console.log("Bienvenue dans l'espace adulte."); // affiche "Bienvenue dans l'espace adulte." dans tout les autres cas


} for (let i = 0; i < 11; i++) { // met la variable i à 0, et ajoute 1 à n tant que i < 11   (7 x n =blabla)
    console.log("7x" + i + "= " + (i * 7));

}

const parler = (nom) => {

    const saluer = ("Bonjour " + nom + "! " + "Comment vas tu?");
    return saluer;
}
const saluer = parler(nom);
console.log(saluer)



const calculerMax = (tableauDeNombres) => {
    return Math.max(...tableauDeNombres);
}

const calculerMin = (tableauDeNombres) => {
    return Math.min(...tableauDeNombres);
}

console.log(calculerMin([12, 432, 9876]))

const calculerMinOuMax = (tableauDeNombres, MinOuMax) => {
    if (MinOuMax === "Min"){
        return calculerMin(tableauDeNombres)
    } else if (MinOuMax === "Max")
        return calculerMax(tableauDeNombres);
      else {
        console.log("Veuillez entrer Max ou Min")
      }
    }

console.log(calculerMinOuMax([12, 543, 12354643, 4, 7856],"Mifdbfdhte"))



