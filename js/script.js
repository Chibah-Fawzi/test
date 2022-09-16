const full_names = ['Said', 'Omar', 'Zoubir', 'Moh', 'Allaoua']
const email = ['said@gmail.com', 'omar@gmail.com', 'zoubir@gmail.com', 'moh@gmail.com', 'allaoua@gmail.com']
const password = ['test', 'aazerer', 'eezrraze', 'azaezezaeaz', 'zaezaezaeajik']

var users = []


for (let i = 0; i < full_names.length; i++) {
    const user = {
        name: full_names[i],
        email: email[i],
        password: password[i]
    }

    users.push(user)
}

function Login() {

    var email = "saiad@gmail.com".toLowerCase()
    var password = "test"

    const found = users.find(element => element.email == email && element.password == password)

    if (found) {
        alert('user conntected')
    } else {
        alert("user not found")

    }
}

function Register() {

    var email = "saiad@gmail.com".toLowerCase()
    var password = "test"
    var name = "said"

    const newUser = {
        name,
        email,
        password
    }

    const found = users.find(element => element.email == email)

    if(found){
        alert('user already exists!')
    } else {
        users.push(newUser)
        alert('user created')
        console.log(users);
    }
}

Register()