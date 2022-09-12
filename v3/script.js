// LIST
var noms = ["Omar", 'Said', 'Jose', 'Mourinho', 'Abde9a']


console.log(noms[0]) // afficher le 1er éléement de la liste noms

console.log(noms.length) // afficher la taille de la liste

// Afficher chaque élement de la liste
for (let i = 0; i < noms.length; i++) {
    console.log(noms[i]);
}

console.log('AVANT : ' + noms);
// noms.push('Mourad') // ajouter à la fin
// noms.unshift('Sade9') // ajouter au début
// noms.shift() // enlever au début
// noms.pop() // enlever à la fin

//          i del remplacer
noms.splice(1, 0, 'Hafid')
console.log('APRES : ' + noms);



// OBJECTS
var user = {
    nom: 'Omar',
    age: 30,
    armée: false,
    commune: 'Alger centre'
}


user.email = 'test@gmail.com' // ajoute une nouvelle propriété

user.age = 20 // change une propriété éxistante

delete user.armée // supprime une propriété

console.log(user);



var names = ['coca', 'fanta', 'pepsi', 'hamoud']
var prix = [80, 70, 100, 200]
var quantité = [10, 200, 15, 5]

var listeDesProduits = []


for (let i = 0; i < names.length; i++) {

    let produit = {
        nom: names[i],
        prix: prix[i],
        quantité: quantité[i]
    }

    listeDesProduits.push(produit)
    console.log(listeDesProduits);

}