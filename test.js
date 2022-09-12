// un objet d'un animal => nom - age - vacciné - race - mâitre
// maître => nom prenom metier marié ou pas


var mariée = {
    nom: 'randja',
    age: 299,
    origine: 'lirabaa nathirathen'
}
var maître = {
    nom: 'alaoua',
    age: 300,
    origine: "azzazga",
    mariée: mariée
}


var animal = {
    nom: 'zizou',
    type: 'chat',
    race: 'siamois',
    age: 1,
    vacciné: true,
    maître: maître
}



console.log(animal);
