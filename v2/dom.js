var p = document.getElementById('p')
var h1 = document.getElementById('h1')
var div = document.getElementById('main')

var divId = div.getAttribute('id')

if (divId === 'main') {
    div.style.background = '#404040'
    div.style.height = "100vh"
    p.style.color = '#fff'
    h1.style.color = 'red'
}