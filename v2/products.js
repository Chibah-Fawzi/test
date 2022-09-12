var names = ['coca', 'fanta', 'pepsi', 'hamoud', 'miranda']
var prices = [200, 140, 120, 240, 100]
var description = ['boisson', 'soda', 'eau', 'charbat', 'jus']

var images = ['2.jpg', '2.jpg', '2.jpg', '2.jpg', '2.jpg']

var produits = []

for (let i = 0; i < names.length; i++) {
    const produit = {
        nom: names[i],
        prix: prices[i],
        description: description[i],
        image: images[i]
    }
    produits.push(produit)

    var main = document.getElementById('main')

    main.innerHTML += ` <div class="card" style="width: 18rem;">
                            <img width="250px" src=${images[i]} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${produit.nom}</h5>
                                <p class="card-text">${produit.description}</p>
                                <div style="display:flex; justify-content:space-between">
                                    <a onclick='console.log(${i})' class="btn btn-primary">Add to cart</a>
                                    <p>${produit.prix}$</p>
                                </div>
                            </div>
                        </div>`

}


function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value

    console.log("name: ", name);
    console.log("password: ", password);
    if (name.length == 0)
        return alert(`name is required`)
    if (password.length < 5)
        return alert(`password length should more than 5`)


    var header = document.getElementById('header')

    header.innerHTML += `<h1>Bonjour, ${name}!</h1>`

}
