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



function addItemInputEntrees() {

    if (document.getElementsByClassName('input-box')[0]) {
        let x = 0;
    }
    else {
        let menu = document.getElementsByClassName('Entrees')[0];
        let inputBox = document.createElement('div');
        inputBox.classList.add('input-box');
        menu.appendChild(inputBox);
        let inputItem = document.createElement('div');
        inputItem.classList.add('input-item');
        inputBox.appendChild(inputItem);

        let itemName = document.createElement('p');
        itemName.innerHTML = 'Name: ';
        inputItem.appendChild(itemName);
        let input = document.createElement('input');
        input.classList.add('input1');
        input.setAttribute('type', 'text');
        inputItem.appendChild(input);

        let inputItem2 = document.createElement('div');
        inputItem2.classList.add('input-item');
        inputBox.appendChild(inputItem2);
        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = 'Description: ';
        inputItem2.appendChild(itemDescription);
        let input2 = document.createElement('input');
        input2.classList.add('input2');
        input2.setAttribute('type', 'text');
        inputItem2.appendChild(input2);

        let inputItem3 = document.createElement('div');
        inputItem3.classList.add('input-item');
        inputBox.appendChild(inputItem3);
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = 'Price: ';
        inputItem3.appendChild(itemPrice);
        let input3 = document.createElement('input');
        input3.classList.add('input3');
        input3.setAttribute('type', 'text');
        inputItem3.appendChild(input3);

        let inputItem4 = document.createElement('div');
        inputItem4.classList.add('input-item');
        inputBox.appendChild(inputItem4);
        let itemImage = document.createElement('p');
        itemImage.innerHTML = 'Image URL: ';
        inputItem4.appendChild(itemImage);
        let input4 = document.createElement('input');
        input4.classList.add('input4');
        input4.setAttribute('type', 'text');
        inputItem4.appendChild(input4);

        let btn = document.createElement('button');
        btn.classList.add('confirm-btn');
        btn.innerHTML = 'Confirm';
        btn.setAttribute('onclick', 'addItemEntrees()');
        inputBox.appendChild(btn);
    }
}



function addItemEntrees() {
    let nameInput = document.getElementsByClassName('input1')[0].value;
    let descriptionInput = document.getElementsByClassName('input2')[0].value;
    let priceInput = document.getElementsByClassName('input3')[0].value;
    let imageInput = document.getElementsByClassName('input4')[0].value;

    if (nameInput === '' || descriptionInput === '' || priceInput === '' || imageInput === '') {
        alert('One or more fields left blank');
    }
    else {
        let entreeNames = JSON.parse(localStorage.getItem('entreeNames')) || [];
        entreeNames.push(nameInput);
        localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    
        let entreeDescriptions = JSON.parse(localStorage.getItem('entreeDescriptions')) || [];
        entreeDescriptions.push(descriptionInput);
        localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    
        let entreePrices = JSON.parse(localStorage.getItem('entreePrices')) || [];
        entreePrices.push(priceInput);
        localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    
        let entreeImages = JSON.parse(localStorage.getItem('entreeImages')) || [];
        entreeImages.push(imageInput);
        localStorage.setItem('entreeImages', JSON.stringify(entreeImages));


        let entreeBox = document.getElementsByClassName('Entrees')[0];
        
        let name = document.createElement('h4');
        name.innerHTML = nameInput;
        entreeBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = descriptionInput;
        entreeBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${priceInput}`;
        entreeBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = imageInput;
        entreeBox.appendChild(image);

        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        entreeBox.appendChild(managePrice);

        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        entreeBox.appendChild(remove);


        let inputBox = document.getElementsByClassName('input-box')[0];
        inputBox.remove();
    }
}



let entreeNames = JSON.parse(localStorage.getItem('entreeNames')) || [];
let entreeDescriptions = JSON.parse(localStorage.getItem('entreeDescriptions')) || [];
let entreePrices = JSON.parse(localStorage.getItem('entreePrices')) || [];
let entreeImages = JSON.parse(localStorage.getItem('entreeImages')) || [];

function retrieveItemsEntrees() {
    let entreeBox = document.getElementsByClassName('Entrees')[0];

    let n = 0;
    for (let i of entreeNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = entreeNames.shift();
        entreeBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = entreeDescriptions.shift()
        entreeBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${entreePrices.shift()}`;
        entreeBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = entreeImages.shift();
        entreeBox.appendChild(image);

        let addToCart = document.createElement('button');
        addToCart.classList.add('addToCart-btn');
        addToCart.innerHTML = 'Add To Cart';
        entreeBox.appendChild(addToCart);
    }
}

function retrieveItemsEntreesManager() {
    let entreeBox = document.getElementsByClassName('Entrees')[0];

    if (document.getElementById('AddItemBtnEntree')) {
        let x = 0;
    }
    else {
        let addItem = document.createElement('button');
        addItem.setAttribute('onclick', 'addItemInputEntrees()');
        addItem.setAttribute('id', 'AddItemBtnEntree');
        addItem.innerHTML = 'Add New Item';
        entreeBox.appendChild(addItem);
    }

    let n = 0;
    for (let i of entreeNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = entreeNames.shift();
        entreeBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = entreeDescriptions.shift()
        entreeBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${entreePrices.shift()}`;
        entreeBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = entreeImages.shift();
        entreeBox.appendChild(image);
    
        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        entreeBox.appendChild(managePrice);
    
        let remove = document.createElement('button');
        remove.classList.add('remove-btn');
        remove.innerHTML = 'Remove';
        entreeBox.appendChild(remove);
    }
}



function addItemInputSides() {
    if (document.getElementsByClassName('input-box')[0]) {
        let x = 0;
    }
    else {
        let menu = document.getElementsByClassName('Sides')[0];
        let inputBox = document.createElement('div');
        inputBox.classList.add('input-box');
        menu.appendChild(inputBox);
        let inputItem = document.createElement('div');
        inputItem.classList.add('input-item');
        inputBox.appendChild(inputItem);

        let itemName = document.createElement('p');
        itemName.innerHTML = 'Name: ';
        inputItem.appendChild(itemName);
        let input = document.createElement('input');
        input.classList.add('input1');
        input.setAttribute('type', 'text');
        inputItem.appendChild(input);

        let inputItem2 = document.createElement('div');
        inputItem2.classList.add('input-item');
        inputBox.appendChild(inputItem2);
        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = 'Description: ';
        inputItem2.appendChild(itemDescription);
        let input2 = document.createElement('input');
        input2.classList.add('input2');
        input2.setAttribute('type', 'text');
        inputItem2.appendChild(input2);

        let inputItem3 = document.createElement('div');
        inputItem3.classList.add('input-item');
        inputBox.appendChild(inputItem3);
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = 'Price: ';
        inputItem3.appendChild(itemPrice);
        let input3 = document.createElement('input');
        input3.classList.add('input3');
        input3.setAttribute('type', 'text');
        inputItem3.appendChild(input3);

        let inputItem4 = document.createElement('div');
        inputItem4.classList.add('input-item');
        inputBox.appendChild(inputItem4);
        let itemImage = document.createElement('p');
        itemImage.innerHTML = 'Image URL: ';
        inputItem4.appendChild(itemImage);
        let input4 = document.createElement('input');
        input4.classList.add('input4');
        input4.setAttribute('type', 'text');
        inputItem4.appendChild(input4);

        let btn = document.createElement('button');
        btn.classList.add('confirm-btn');
        btn.innerHTML = 'Confirm';
        btn.setAttribute('onclick', 'addItemSides()');
        inputBox.appendChild(btn);
    }
}



function addItemSides() {
    let nameInput = document.getElementsByClassName('input1')[0].value;
    let descriptionInput = document.getElementsByClassName('input2')[0].value;
    let priceInput = document.getElementsByClassName('input3')[0].value;
    let imageInput = document.getElementsByClassName('input4')[0].value;

    if (nameInput === '' || descriptionInput === '' || priceInput === '' || imageInput === '') {
        alert('One or more fields left blank');
    }
    else {
        let sideNames = JSON.parse(localStorage.getItem('sideNames')) || [];
        sideNames.push(nameInput);
        localStorage.setItem('sideNames', JSON.stringify(sideNames));
    
        let sideDescriptions = JSON.parse(localStorage.getItem('sideDescriptions')) || [];
        sideDescriptions.push(descriptionInput);
        localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    
        let sidePrices = JSON.parse(localStorage.getItem('sidePrices')) || [];
        sidePrices.push(priceInput);
        localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    
        let sideImages = JSON.parse(localStorage.getItem('sideImages')) || [];
        sideImages.push(imageInput);
        localStorage.setItem('sideImages', JSON.stringify(sideImages));


        let sideBox = document.getElementsByClassName('Sides')[0];
        
        let name = document.createElement('h4');
        name.innerHTML = nameInput;
        sideBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = descriptionInput;
        sideBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${priceInput}`;
        sideBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = imageInput;
        sideBox.appendChild(image);

        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        sideBox.appendChild(managePrice);

        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        sideBox.appendChild(remove);


        let inputBox = document.getElementsByClassName('input-box')[0];
        inputBox.remove();
    }
}



let sideNames = JSON.parse(localStorage.getItem('sideNames')) || [];
let sideDescriptions = JSON.parse(localStorage.getItem('sideDescriptions')) || [];
let sidePrices = JSON.parse(localStorage.getItem('sidePrices')) || [];
let sideImages = JSON.parse(localStorage.getItem('sideImages')) || [];

function retrieveItemsSides() {
    let sideBox = document.getElementsByClassName('Sides')[0];

    let n = 0;
    for (let i of sideNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = sideNames.shift();
        sideBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = sideDescriptions.shift()
        sideBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${sidePrices.shift()}`;
        sideBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = sideImages.shift();
        sideBox.appendChild(image);

        let addToCart = document.createElement('button');
        addToCart.classList.add('addToCart-btn');
        addToCart.innerHTML = 'Add To Cart';
        sideBox.appendChild(addToCart);
    }
}



function retrieveItemsSidesManager() {
    let sideBox = document.getElementsByClassName('Sides')[0];

    if (document.getElementById('AddItemBtnSides')) {
        let x = 0;
    }
    else {
        let addItem = document.createElement('button');
        addItem.setAttribute('onclick', 'addItemInputSides()');
        addItem.setAttribute('id', 'AddItemBtnSides');
        addItem.innerHTML = 'Add New Item';
        sideBox.appendChild(addItem);
    }

    let n = 0;
    for (let i of sideNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = sideNames.shift();
        sideBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = sideDescriptions.shift()
        sideBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${sidePrices.shift()}`;
        sideBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = sideImages.shift();
        sideBox.appendChild(image);
    
        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        sideBox.appendChild(managePrice);
    
        let remove = document.createElement('button');
        remove.classList.add('remove-btn');
        remove.innerHTML = 'Remove';
        sideBox.appendChild(remove);
    }


}



function addItemInputDrinks() {
    if (document.getElementsByClassName('input-box')[0]) {
        let x = 0;
    }
    else {
        let menu = document.getElementsByClassName('Drinks')[0];
        let inputBox = document.createElement('div');
        inputBox.classList.add('input-box');
        menu.appendChild(inputBox);
        let inputItem = document.createElement('div');
        inputItem.classList.add('input-item');
        inputBox.appendChild(inputItem);
    
        let itemName = document.createElement('p');
        itemName.innerHTML = 'Name: ';
        inputItem.appendChild(itemName);
        let input = document.createElement('input');
        input.classList.add('input1');
        input.setAttribute('type', 'text');
        inputItem.appendChild(input);
    
        let inputItem2 = document.createElement('div');
        inputItem2.classList.add('input-item');
        inputBox.appendChild(inputItem2);
        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = 'Description: ';
        inputItem2.appendChild(itemDescription);
        let input2 = document.createElement('input');
        input2.classList.add('input2');
        input2.setAttribute('type', 'text');
        inputItem2.appendChild(input2);
    
        let inputItem3 = document.createElement('div');
        inputItem3.classList.add('input-item');
        inputBox.appendChild(inputItem3);
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = 'Price: ';
        inputItem3.appendChild(itemPrice);
        let input3 = document.createElement('input');
        input3.classList.add('input3');
        input3.setAttribute('type', 'text');
        inputItem3.appendChild(input3);
    
        let inputItem4 = document.createElement('div');
        inputItem4.classList.add('input-item');
        inputBox.appendChild(inputItem4);
        let itemImage = document.createElement('p');
        itemImage.innerHTML = 'Image URL: ';
        inputItem4.appendChild(itemImage);
        let input4 = document.createElement('input');
        input4.classList.add('input4');
        input4.setAttribute('type', 'text');
        inputItem4.appendChild(input4);
    
        let btn = document.createElement('button');
        btn.classList.add('confirm-btn');
        btn.innerHTML = 'Confirm';
        btn.setAttribute('onclick', 'addItemDrinks()');
        inputBox.appendChild(btn);
    }
}



function addItemDrinks() {
    let nameInput = document.getElementsByClassName('input1')[0].value;
    let descriptionInput = document.getElementsByClassName('input2')[0].value;
    let priceInput = document.getElementsByClassName('input3')[0].value;
    let imageInput = document.getElementsByClassName('input4')[0].value;

    if (nameInput === '' || descriptionInput === '' || priceInput === '' || imageInput === '') {
        alert('One or more fields left blank');
    }
    else {
        let drinkNames = JSON.parse(localStorage.getItem('drinkNames')) || [];
        drinkNames.push(nameInput);
        localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    
        let drinkDescriptions = JSON.parse(localStorage.getItem('drinkDescriptions')) || [];
        drinkDescriptions.push(descriptionInput);
        localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    
        let drinkPrices = JSON.parse(localStorage.getItem('drinkPrices')) || [];
        drinkPrices.push(priceInput);
        localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    
        let drinkImages = JSON.parse(localStorage.getItem('drinkImages')) || [];
        drinkImages.push(imageInput);
        localStorage.setItem('drinkImages', JSON.stringify(drinkImages));


        let drinksBox = document.getElementsByClassName('Drinks')[0];
        
        let name = document.createElement('h4');
        name.innerHTML = nameInput;
        drinksBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = descriptionInput;
        drinksBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${priceInput}`;
        drinksBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = imageInput;
        drinksBox.appendChild(image);

        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        drinksBox.appendChild(managePrice);

        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        drinksBox.appendChild(remove);


        let inputBox = document.getElementsByClassName('input-box')[0];
        inputBox.remove();
    }
}



let drinkNames = JSON.parse(localStorage.getItem('drinkNames')) || [];
let drinkDescriptions = JSON.parse(localStorage.getItem('drinkDescriptions')) || [];
let drinkPrices = JSON.parse(localStorage.getItem('drinkPrices')) || [];
let drinkImages = JSON.parse(localStorage.getItem('drinkImages')) || [];

function retrieveItemsDrinks() {
    let drinksBox = document.getElementsByClassName('Drinks')[0];

    let n = 0
    for (let i of drinkNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = drinkNames.shift();
        drinksBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = drinkDescriptions.shift()
        drinksBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${drinkPrices.shift()}`;
        drinksBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = drinkImages.shift();
        drinksBox.appendChild(image);

        let addToCart = document.createElement('button');
        addToCart.classList.add('addToCart-btn');
        addToCart.innerHTML = 'Add To Cart';
        drinksBox.appendChild(addToCart);
    }
}



function retrieveItemsDrinksManager() {
    let drinkBox = document.getElementsByClassName('Drinks')[0];

    if (document.getElementById('AddItemBtnDrinks')) {
        let x = 0;
    }
    else {
        let addItem = document.createElement('button');
        addItem.setAttribute('onclick', 'addItemInputDrinks()');
        addItem.setAttribute('id', 'AddItemBtnDrinks');
        addItem.innerHTML = 'Add New Item';
        drinkBox.appendChild(addItem);
    }

    let n = 0;
    for (let i of drinkNames) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        let name = document.createElement('h4');
        name.innerHTML = drinkNames.shift();
        drinkBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = drinkDescriptions.shift()
        drinkBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${drinkPrices.shift()}`;
        drinkBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = drinkImages.shift();
        drinkBox.appendChild(image);
    
        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        drinkBox.appendChild(managePrice);
    
        let remove = document.createElement('button');
        remove.classList.add('remove-btn');
        remove.innerHTML = 'Remove';
        drinkBox.appendChild(remove);
    }

    
}
    