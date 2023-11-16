function signUp() {
    let email = document.getElementsByClassName('signup-inputs-email')[0].value;
    let pass = document.getElementsByClassName('signup-inputs-pass')[0].value;

    localStorage.setItem(email, pass);
} 



function login() {
    let email = document.getElementsByClassName('username')[0].value;
    let pass = document.getElementsByClassName('password')[0].value;
    
    if (localStorage.getItem(email)) {
        if (pass === localStorage.getItem(email)) {
            location.replace('menu.html');
        }
        else {
            alert('Incorrect password')
        }
    }
    else {
        alert('Email not found');
    }
}