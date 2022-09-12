const full_names = ['Said', 'Omar', 'Zoubir', 'Moh', 'Allaoua']
const email = ['said@gmail.com', 'omar@gmail.com', 'zoubir@gmail.com', 'moh@gmail.com', 'allaoua@gmail.com']
const password = ['test', 'aazerer', 'eezrraze', 'azaezezaeaz', 'zaezaezaeajik']

var users = []

for (let i = 0; i < full_names.length; i++) {

    const user = {
        full_name: full_names[i],
        email: email[i],
        password: password[i]
    }
    users.push(user)
}


function login(email, password) {

    const found = users.find(user => user.email == email && user.password == password)

    if (found) {
        alert('bienvenu')
    } else {
        alert('erreur dans vos identifients')
    }
}

login('omar@gmail.com', 'test')

function register(email, password, full_name) {
    const newUser = {
        full_name: full_name,
        email: email,
        password: password
    }

    const found = users.find(user => user.email == email)
    if (!found) {
        if (password.length > 6) {
            users.push(newUser)
        } else {
            console.log('password too short');
        }
    } else {
        alert('Cet utilisateur existe déja');
    }

    console.log(users);
}

// register('omar@gmail.com', 'testing', 'fawzi chibah')