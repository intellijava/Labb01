// Declaring the variables for forms
const formLogin = document.querySelector('#login');
const formSignUp = document.querySelector('#signUp');
//Declaring variables for elements
const txtFieldUserName = document.querySelector('#userName');
const txtFieldEmail = document.querySelector('#email');
const txtFieldPassword = document.querySelector('#password');

const txtFieldUname = document.querySelector('#uname');
const txtFieldPass = document.querySelector('#psw');




function User(userName, email, password ){
    this.userName = userName;
    this.password = password;
    this.email = email;
}



function showName(event) {

    let userName = txtFieldUname.value;
    let password = txtFieldPass.value;
    console.log('Displaying in the Console in webBrowser ' + localStorage.getItem('User'));
    // if(!((userName === localStorage.getItem(userName)) && (password === localStorage.getItem(password))))
        event.preventDefault();
}
function storeNewUser(event) {
    let userName = txtFieldUserName.value;
    let email = txtFieldEmail.value;
    let password = txtFieldPassword.value;
    let user = new User(userName, email, password);
    localStorage.setItem('User', JSON.stringify(user));
    event.preventDefault();
}
// let helloText = 'Hello Farrukh';
//
// console.log('Displaying in the Console in webBrowser ' + helloText);

formLogin.addEventListener('submit', showName, false);
formSignUp.addEventListener('submit', storeNewUser, false);