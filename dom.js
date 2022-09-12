// on a récupérer l'élement de l'html qui a l'id "container"
var container = document.getElementById('container')

var darkMode = false

if (darkMode == true) {
    // on a changer le contenu de la class de l'élement qui a l'id container
    container.setAttribute('class', 'dark')
} else {
    // on a changer le contenu de la class de l'élement qui a l'id container
    container.setAttribute('class', 'light')
}

// condition ternaire pour changer le background de l'élement 
container.getAttribute('class') == 'dark' ? container.style.background = 'black' : container.style.background = 'beige'