// Declaring the variables for forms
const formSignUp = document.querySelector('#signUp');
//Declaring variables for elements
const txtFieldUserName = document.querySelector('#userName');
const txtFieldEmail = document.querySelector('#email');
const txtFieldPassword = document.querySelector('#password');
const txtFieldRePassword = document.querySelector('#rePassword');
//Declaring variables for showing up the validation message
const userNameHint = document.querySelector('#userNameHint');
const passwordHint = document.querySelector('#passwordHint');

function userNameCheck(minLength) {
    if (txtFieldUserName.value.length < minLength) {
        userNameHint.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {
        userNameHint.innerHTML = '';
    }
}

function passwordCheck() {
    if (txtFieldPassword.value === txtFieldRePassword.value) {
        passwordHint.innerHTML = '';
    } else {
        passwordHint.innerHTML = "Password you enter doesn't match";
    }
}

function storeNewUser(event) {

    localStorage.setItem('userName', txtFieldUserName.value);
    localStorage.setItem('email', txtFieldEmail.value);
    localStorage.setItem('password', txtFieldPassword.value);
    event.preventDefault();
}

txtFieldUserName.addEventListener('blur', function () {
    userNameCheck(5);
}, false);
txtFieldRePassword.addEventListener('blur', passwordCheck, false);
formSignUp.addEventListener('submit', storeNewUser, false);