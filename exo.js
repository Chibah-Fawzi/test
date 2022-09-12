// Listes des étudiants admis à l'USTHB
var liste_étudiants = ['Said', 'Rachid', 'Moha', 'Samir']

// function pour filtrer les étudiants admis ou pas à l'USTHB
function entryToUSTHB(note_general, note_math, full_name) {


    if (note_general >= 9.51) {
        // ajouter l'étudiant (full_name) à la liste 
        liste_étudiants.push(full_name)

        // dire bonjour à l'étudiant admis
        console.log(`Bonjour ${full_name}`);

        // afficher la nouvelle liste d'étudiants
        console.log(liste_étudiants);

        switch (true) {
            case note_general >= 9.51:
                console.log('Accés à geologie');
                break;
            case note_general >= 9.91:
                console.log('Accés à SM');
                break;
            case note_general >= 11.5:
                console.log('Accés à ST');
                break;
            case note_general >= 15 && note_math >= 16:
                console.log('Accés à Mathématique');
                break;
            case note_general >= 16 && note_math >= 16:
                console.log('Accés à Informatique');
                break;

            default:
                console.log("il y'as une erreur");
                break;
        }
    } else {
        console.log('3awed sahitou');
    }
}


// Executer la function
//           ng  nm    full_name 
entryToUSTHB(15, 14, 'said dahleb')


for (let index = 0; index < liste_étudiants.length; index++) {
    if (liste_étudiants[index] === 'Moha') {
        console.log('trouvé! à l index : ' + index)
        liste_étudiants.splice(index, 1)
        console.log(liste_étudiants);
    }

}

// [listes des étudiants admis] => ajouté ici
// function enlever un étudiant de la liste

    

// listes of objects instead of list of strings
// objects => propriété admis/refusé
// admis ? change school year and display alert : display alert
//  

// var famille = {
//     name: 'Taous',
//     pére: {
//         nom: 'mohamed',
//         age: 60,
//         metier: 'docteur',
//         marié: mére
//     },
//     mére,
//     fils: fils
// }

// var mére = {
//     nom: 'aaljia',
//     age: 67,
//     metier: 'ingenieur'
// }

// var fils = {
//     nom: 'said',
//     pére: famille.pére
// }

// console.log(famille);