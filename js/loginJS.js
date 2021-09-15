// Declaring the variables for forms
const formLogin = document.querySelector('#login');

//Declaring variables for elements
const txtFieldUname = document.querySelector('#uname');
const txtFieldPass = document.querySelector('#psw');




function showName(event) {
    console.log('Displaying in the Console in webBrowser ' + localStorage.getItem('User'));
    if(!((txtFieldUname.value === localStorage.getItem('userName')) && (txtFieldPass.value === localStorage.getItem('password'))))
        alert("Please check the credentials!")
    else
        alert("Login succeeded!")
    event.preventDefault();
}

formLogin.addEventListener('submit', showName, false);