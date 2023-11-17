function signUp() {
    let email = document.getElementsByClassName('signup-inputs-email')[0].value;
    let pass = document.getElementsByClassName('signup-inputs-pass')[0].value;
    let emailInput = document.getElementsByClassName('signup-inputs-email')[0];

    if (localStorage.getItem(email)) {
        alert('You already have an account with us.');
    }
    else if (email === '' || pass === '') {
        alert('Enter a valid email, and create password')
    }
    else if (emailInput.validity.valid) {
        localStorage.setItem(email, pass);
        location.replace('index.html');
    }
    else {
        alert('Not a valid email');
    }



} 



function login() {
    let email = document.getElementsByClassName('username')[0].value;
    let pass = document.getElementsByClassName('password')[0].value;
    
    if (localStorage.getItem(email)) {
        if (pass === localStorage.getItem(email)) {
            location.replace('/Menu/menu.html');
        }
        else {
            alert('Incorrect password')
        }
    }
    else if (email === '' || pass === '') {
        alert('Enter correct email and password');
    }
    else {
        alert('Email not found');
    }
}
