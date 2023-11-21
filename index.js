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
        location.replace('index.html#login');
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
            location.replace('/Connector_Customer/connector.html');
        }
        else {
            alert('Incorrect password')
        }
    }
    else if (email === '' || pass === '') {
        alert('Enter correct email and password');
    }
    else if (email === 'thebossman@gmail.com' && pass === '1234')
    {
        location.replace('/Menu (Manager)/managermenu.html');
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





if (entreeNames.indexOf('Burger') === -1 && localStorage.getItem('thereName1?') === null) {
    entreeNames.push('Burger');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName1?', 'yes');
}
    
if (entreeDescriptions.indexOf('Greasy burger yum') === -1 && localStorage.getItem('thereDescription1?') === null) {
    entreeDescriptions.push('Greasy burger yum');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription1?', 'yes');
}
    
if (entreePrices.indexOf('$5.00') === -1 && localStorage.getItem('therePrice1?') === null) {
    entreePrices.push('$5.00');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice1?', 'yes');
}
    
if (entreeImages.indexOf('https://tse1.mm.bing.net/th?id=OIP.lkl9IzIYsoW2celgozPDcwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107') === -1 && localStorage.getItem('thereImage1?') === null) {
    entreeImages.push('https://tse1.mm.bing.net/th?id=OIP.lkl9IzIYsoW2celgozPDcwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage1?', 'yes');
}





if (entreeNames.indexOf('Sausage Sandwich') === -1 && localStorage.getItem('thereName2?') === null) {
    entreeNames.push('Sausage Sandwich');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName2?', 'yes');
}
    
if (entreeDescriptions.indexOf('Greasy sausage yum') === -1 && localStorage.getItem('thereDescription2?') === null) {
    entreeDescriptions.push('Greasy sausage yum');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription2?', 'yes');
}
    
if (entreePrices.indexOf('$4.00') === -1 && localStorage.getItem('therePrice2?') === null) {
    entreePrices.push('$4.00');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice2?', 'yes');
}
    
if (entreeImages.indexOf('https://tse1.mm.bing.net/th?id=OIP.ydmk2qgDSOQZk8XycOaA8gHaEF&pid=Api&rs=1&c=1&qlt=95&w=215&h=118') === -1 && localStorage.getItem('thereImage2?') === null) {
    entreeImages.push('https://tse1.mm.bing.net/th?id=OIP.ydmk2qgDSOQZk8XycOaA8gHaEF&pid=Api&rs=1&c=1&qlt=95&w=215&h=118');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage2?', 'yes');
}



function retrieveItemsEntrees() {
    let entreeBox = document.getElementsByClassName('Entrees')[0];

    

    for (i in entreeNames) {
        let name = document.createElement('h4');
        name.innerHTML = entreeNames.slice(0)[i];
        entreeBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = entreeDescriptions.slice(0)[i];
        entreeBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${entreePrices.slice(0)[i]}`;
        entreeBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = entreeImages.slice(0)[i];
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

    

    for (i in entreeNames) {
        let name = document.createElement('h4');
        name.innerHTML = entreeNames.slice(0)[i];
        entreeBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = entreeDescriptions.slice(0)[i];
        entreeBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-entree');
        price.innerHTML = `Price: ${entreePrices.slice(0)[i]}`;
        entreeBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = entreeImages.slice(0)[i];
        entreeBox.appendChild(image);
    
        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        managePrice.classList.add('managePrice-entree');

        managePrice.addEventListener('click', function() {
            let managePriceArray = document.getElementsByClassName('managePrice-entree');
            let prices = document.getElementsByClassName('item-price-entree');
            let userInput = prompt('Change Price: ');
            while (userInput === null || userInput === '') {
                userInput = prompt('Change Price: ');
            }
            let index = Array.prototype.indexOf.call(managePriceArray, this);
            prices[index].innerHTML = `Price: ${userInput}`;
            entreePrices.splice(index, 1, userInput);
            localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
        })        
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





if (sideNames.indexOf('French Fries') === -1 && localStorage.getItem('thereName3?') === null) {
    sideNames.push('French Fries');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName3?', 'yes');
}
    
if (sideDescriptions.indexOf('Greasy fries yum') === -1 && localStorage.getItem('thereDescription3?') === null) {
    sideDescriptions.push('Greasy fries yum');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription3?', 'yes');
}
    
if (sidePrices.indexOf('$2.00') === -1 && localStorage.getItem('therePrice3?') === null) {
    sidePrices.push('$2.00');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice3?', 'yes');
}
    
if (sideImages.indexOf('https://tse1.mm.bing.net/th?id=OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj&pid=Api&rs=1&c=1&qlt=95&w=148&h=111') === -1 && localStorage.getItem('thereImage3?') === null) {
    sideImages.push('https://tse1.mm.bing.net/th?id=OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj&pid=Api&rs=1&c=1&qlt=95&w=148&h=111');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage3?', 'yes');
}





function retrieveItemsSides() {
    let sideBox = document.getElementsByClassName('Sides')[0];

    

    for (i in sideNames) {
        let name = document.createElement('h4');
        name.innerHTML = sideNames.slice(0)[i];
        sideBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = sideDescriptions.slice(0)[i];
        sideBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${sidePrices.slice(0)[i]}`;
        sideBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = sideImages.slice(0)[i];
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

    

    for (i in sideNames) {
        let name = document.createElement('h4');
        name.innerHTML = sideNames.slice(0)[i];
        sideBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = sideDescriptions.slice(0)[i];
        sideBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-side');
        price.innerHTML = `Price: ${sidePrices.slice(0)[i]}`;
        sideBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = sideImages.slice(0)[i];
        sideBox.appendChild(image);
    
        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        managePrice.classList.add('managePrice-side');

        managePrice.addEventListener('click', function() {
            let managePriceArray = document.getElementsByClassName('managePrice-side');
            let prices = document.getElementsByClassName('item-price-side');
            let userInput = prompt('Change Price: ');
            while (userInput === null || userInput === '') {
                userInput = prompt('Change Price: ');
            }
            let index = Array.prototype.indexOf.call(managePriceArray, this);
            prices[index].innerHTML = `Price: ${userInput}`;
            sidePrices.splice(index, 1, userInput);
            localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
        })        
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




if (drinkNames.indexOf('Water') === -1 && localStorage.getItem('thereName4?') === null) {
    drinkNames.push('Water');
    localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    localStorage.setItem('thereName4?', 'yes');
}
    
if (drinkDescriptions.indexOf('Greasy water yum') === -1 && localStorage.getItem('thereDescription4?') === null) {
    drinkDescriptions.push('Greasy water yum');
    localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    localStorage.setItem('thereDescription4?', 'yes');
}
    
if (drinkPrices.indexOf('$1.00') === -1 && localStorage.getItem('therePrice4?') === null) {
    drinkPrices.push('$1.00');
    localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    localStorage.setItem('therePrice4?', 'yes');
}
    
if (drinkImages.indexOf('https://tse2.mm.bing.net/th?id=OIP.-fEj_aM7jxziXSuZhfeMqwHaHa&pid=Api&P=0&h=180') === -1 && localStorage.getItem('thereImage4?') === null) {
    drinkImages.push('https://tse2.mm.bing.net/th?id=OIP.-fEj_aM7jxziXSuZhfeMqwHaHa&pid=Api&P=0&h=180');
    localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
    localStorage.setItem('thereImage4?', 'yes');
}





function retrieveItemsDrinks() {
    let drinksBox = document.getElementsByClassName('Drinks')[0];

    for (i in drinkNames) {

        let name = document.createElement('h4');
        name.innerHTML = drinkNames.slice(0)[i];
        drinksBox.appendChild(name);

        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = drinkDescriptions.slice(0)[i]
        drinksBox.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('item-price');
        price.innerHTML = `Price: ${drinkPrices.slice(0)[i]}`;
        drinksBox.appendChild(price);

        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = drinkImages.slice(0)[i];
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


    

    for (i in drinkNames) {
        let name = document.createElement('h4');
        name.innerHTML = drinkNames.slice(0)[i];
        drinkBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.innerHTML = drinkDescriptions.slice(0)[i];
        drinkBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-drink');
        price.innerHTML = `Price: ${drinkPrices.slice(0)[i]}`;
        drinkBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src = drinkImages.slice(0)[i];
        drinkBox.appendChild(image);

        let managePrice = document.createElement('button');
        managePrice.innerHTML = 'Manage Price';
        managePrice.classList.add('managePrice-drink');

        managePrice.addEventListener('click', function() {
            let managePriceArray = document.getElementsByClassName('managePrice-drink');
            let prices = document.getElementsByClassName('item-price-drink');
            let userInput = prompt('Change Price: ');
            while (userInput === null || userInput === '') {
                userInput = prompt('Change Price: ');
            }
            let index = Array.prototype.indexOf.call(managePriceArray, this);
            prices[index].innerHTML = `Price: ${userInput}`;
            drinkPrices.splice(index, 1, userInput);
            localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
        })
        drinkBox.appendChild(managePrice);
    
        let remove = document.createElement('button');
        remove.classList.add('remove-btn');
        remove.innerHTML = 'Remove';
        drinkBox.appendChild(remove);
    }
}

