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



function addItemInput() {
    let menu = document.getElementById('menu');
    let inputBox = document.createElement('div');
    inputBox.classList.add('input-box')
    menu.appendChild(inputBox);
    let inputItem = document.createElement('div');
    inputItem.classList.add('input-item');
    inputBox.appendChild(inputItem)

    let itemName = document.createElement('p');
    itemName.innerHTML = 'Name: ';
    inputItem.appendChild(itemName);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    inputItem.appendChild(input);

    let inputItem2 = document.createElement('div');
    inputItem2.classList.add('input-item');
    inputBox.appendChild(inputItem2);
    let itemDescription = document.createElement('p');
    itemDescription.innerHTML = 'Description: ';
    inputItem2.appendChild(itemDescription);
    let input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    inputItem2.appendChild(input2);

    let inputItem3 = document.createElement('div');
    inputItem3.classList.add('input-item');
    inputBox.appendChild(inputItem3);
    let itemPrice = document.createElement('p');
    itemPrice.innerHTML = 'Price: ';
    inputItem3.appendChild(itemPrice);
    let input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    inputItem3.appendChild(input3);

    let inputItem4 = document.createElement('div');
    inputItem4.classList.add('input-item');
    inputBox.appendChild(inputItem4);
    let itemImage = document.createElement('p');
    itemImage.innerHTML = 'Image URL: ';
    inputItem4.appendChild(itemImage);
    let input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    inputItem4.appendChild(input4);

    let btn = document.createElement('button');
    btn.classList.add('confirm-btn');
    btn.innerHTML = 'Confirm'
    inputBox.appendChild(btn);
}