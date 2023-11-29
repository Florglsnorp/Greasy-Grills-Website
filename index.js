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





if (entreeNames.indexOf('Double Cheeseburger') === -1 && localStorage.getItem('thereName1?') === null) {
    entreeNames.push('Double Cheeseburger');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName1?', 'yes');
}
    
if (entreeDescriptions.indexOf('Greasy patties with cheese, lettuce, tomato, mayo on our signature bread.') === -1 && localStorage.getItem('thereDescription1?') === null) {
    entreeDescriptions.push('Greasy patties with cheese, lettuce, tomato, mayo on our signature bread.');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription1?', 'yes');
}
    
if (entreePrices.indexOf('$4.99') === -1 && localStorage.getItem('therePrice1?') === null) {
    entreePrices.push('$4.99');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice1?', 'yes');
}
    
if (entreeImages.indexOf('https://thedelightfullaugh.com/wp-content/uploads/2020/09/smashed-double-cheeseburger.jpg') === -1 && localStorage.getItem('thereImage1?') === null) {
    entreeImages.push('https://thedelightfullaugh.com/wp-content/uploads/2020/09/smashed-double-cheeseburger.jpg');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage1?', 'yes');
}





if (entreeNames.indexOf('Sausage Sandwich') === -1 && localStorage.getItem('thereName2?') === null) {
    entreeNames.push('Sausage Sandwich');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName2?', 'yes');
}
    
if (entreeDescriptions.indexOf('Sausage on our signature bread. Topped with pico de gallo, onions, mayo.') === -1 && localStorage.getItem('thereDescription2?') === null) {
    entreeDescriptions.push('Sausage on our signature bread. Topped with pico de gallo, onions, mayo.');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription2?', 'yes');
}
    
if (entreePrices.indexOf('$5.50') === -1 && localStorage.getItem('therePrice2?') === null) {
    entreePrices.push('$5.50');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice2?', 'yes');
}
    
if (entreeImages.indexOf('https://theonlinegrill.com/wp-content/uploads/French-bun-sandwich-with-griled-sausage-and-onion.-Easy-fast-food-recipe-for-home-cooking-4-500x500.jpg') === -1 && localStorage.getItem('thereImage2?') === null) {
    entreeImages.push('https://theonlinegrill.com/wp-content/uploads/French-bun-sandwich-with-griled-sausage-and-onion.-Easy-fast-food-recipe-for-home-cooking-4-500x500.jpg');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage2?', 'yes');
}





if (entreeNames.indexOf('Item 3') === -1 && localStorage.getItem('thereName3?') === null) {
    entreeNames.push('Item 3');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName3?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 3') === -1 && localStorage.getItem('thereDescription3?') === null) {
    entreeDescriptions.push('Item 3');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription3?', 'yes');
}
    
if (entreePrices.indexOf('Item 3') === -1 && localStorage.getItem('therePrice3?') === null) {
    entreePrices.push('Item 3');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice3?', 'yes');
}
    
if (entreeImages.indexOf('Item 3') === -1 && localStorage.getItem('thereImage3?') === null) {
    entreeImages.push('Item 3');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage3?', 'yes');
}





if (entreeNames.indexOf('Item 4') === -1 && localStorage.getItem('thereName4?') === null) {
    entreeNames.push('Item 4');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName4?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 4') === -1 && localStorage.getItem('thereDescription4?') === null) {
    entreeDescriptions.push('Item 4');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription4?', 'yes');
}
    
if (entreePrices.indexOf('Item 4') === -1 && localStorage.getItem('therePrice4?') === null) {
    entreePrices.push('Item 4');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice4?', 'yes');
}
    
if (entreeImages.indexOf('Item 4') === -1 && localStorage.getItem('thereImage4?') === null) {
    entreeImages.push('Item 4');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage4?', 'yes');
}





if (entreeNames.indexOf('Item 5') === -1 && localStorage.getItem('thereName5?') === null) {
    entreeNames.push('Item 5');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName5?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 5') === -1 && localStorage.getItem('thereDescription5?') === null) {
    entreeDescriptions.push('Item 5');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription5?', 'yes');
}
    
if (entreePrices.indexOf('Item 5') === -1 && localStorage.getItem('therePrice5?') === null) {
    entreePrices.push('Item 5');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice5?', 'yes');
}
    
if (entreeImages.indexOf('Item 5') === -1 && localStorage.getItem('thereImage5?') === null) {
    entreeImages.push('Item 5');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage5?', 'yes');
}





if (entreeNames.indexOf('Item 6') === -1 && localStorage.getItem('thereName6?') === null) {
    entreeNames.push('Item 6');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName6?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 6') === -1 && localStorage.getItem('thereDescription6?') === null) {
    entreeDescriptions.push('Item 6');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription6?', 'yes');
}
    
if (entreePrices.indexOf('Item 6') === -1 && localStorage.getItem('therePrice6?') === null) {
    entreePrices.push('Item 6');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice6?', 'yes');
}
    
if (entreeImages.indexOf('Item 6') === -1 && localStorage.getItem('thereImage6?') === null) {
    entreeImages.push('Item 6');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage6?', 'yes');
}





if (entreeNames.indexOf('Item 7') === -1 && localStorage.getItem('thereName7?') === null) {
    entreeNames.push('Item 7');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName7?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 7') === -1 && localStorage.getItem('thereDescription7?') === null) {
    entreeDescriptions.push('Item 7');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription7?', 'yes');
}
    
if (entreePrices.indexOf('Item 7') === -1 && localStorage.getItem('therePrice7?') === null) {
    entreePrices.push('Item 7');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice7?', 'yes');
}
    
if (entreeImages.indexOf('Item 7') === -1 && localStorage.getItem('thereImage7?') === null) {
    entreeImages.push('Item 7');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage7?', 'yes');
}





if (entreeNames.indexOf('Item 8') === -1 && localStorage.getItem('thereName8?') === null) {
    entreeNames.push('Item 8');
    localStorage.setItem('entreeNames', JSON.stringify(entreeNames));
    localStorage.setItem('thereName8?', 'yes');
}
    
if (entreeDescriptions.indexOf('Item 8') === -1 && localStorage.getItem('thereDescription8?') === null) {
    entreeDescriptions.push('Item 8');
    localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));
    localStorage.setItem('thereDescription8?', 'yes');
}
    
if (entreePrices.indexOf('Item 8') === -1 && localStorage.getItem('therePrice8?') === null) {
    entreePrices.push('Item 8');
    localStorage.setItem('entreePrices', JSON.stringify(entreePrices));
    localStorage.setItem('therePrice8?', 'yes');
}
    
if (entreeImages.indexOf('Item 8') === -1 && localStorage.getItem('thereImage8?') === null) {
    entreeImages.push('Item 8');
    localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
    localStorage.setItem('thereImage8?', 'yes');
}



function retrieveItemsEntrees() {
    let entreeBox = document.getElementsByClassName('Entrees')[0];

    let btn = document.getElementsByClassName('btn-entrees')[0];
    btn.setAttribute('disabled', true);

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

    let btn = document.getElementsByClassName('btn-entrees')[0];
    btn.setAttribute('disabled', true);

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
        name.classList.add('item-name-entree')
        name.innerHTML = entreeNames.slice(0)[i];
        entreeBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description-entree');
        description.innerHTML = entreeDescriptions.slice(0)[i];
        entreeBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-entree');
        price.innerHTML = `Price: ${entreePrices.slice(0)[i]}`;
        entreeBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image-entree');
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
        remove.classList.add('remove-entree');
        remove.innerHTML = 'Remove';
        remove.addEventListener('click', function() {
            let removeArray = document.getElementsByClassName('remove-entree');
            let names = document.getElementsByClassName('item-name-entree');
            let descriptions = document.getElementsByClassName('item-description-entree');
            let prices = document.getElementsByClassName('item-price-entree');
            let images = document.getElementsByClassName('item-image-entree');
            let managePriceArray = document.getElementsByClassName('managePrice-entree');

            
            let index = Array.prototype.indexOf.call(removeArray, this);

            names[index].remove();
            descriptions[index].remove();
            prices[index].remove();
            images[index].remove();
            managePriceArray[index].remove();
            removeArray[index].remove();

            entreeNames.splice(index, 1);
            localStorage.setItem('entreeNames', JSON.stringify(entreeNames));

            entreeDescriptions.splice(index, 1);
            localStorage.setItem('entreeDescriptions', JSON.stringify(entreeDescriptions));

            entreePrices.splice(index, 1);
            localStorage.setItem('entreePrices', JSON.stringify(entreePrices));

            entreeImages.splice(index, 1);
            localStorage.setItem('entreeImages', JSON.stringify(entreeImages));
        })
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





if (sideNames.indexOf('French Fries') === -1 && localStorage.getItem('thereName9?') === null) {
    sideNames.push('French Fries');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName9?', 'yes');
}
    
if (sideDescriptions.indexOf('Greasy fries yum') === -1 && localStorage.getItem('thereDescription9?') === null) {
    sideDescriptions.push('Greasy fries yum');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription9?', 'yes');
}
    
if (sidePrices.indexOf('$2.00') === -1 && localStorage.getItem('therePrice9?') === null) {
    sidePrices.push('$2.00');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice9?', 'yes');
}
    
if (sideImages.indexOf('https://tse1.mm.bing.net/th?id=OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj&pid=Api&rs=1&c=1&qlt=95&w=148&h=111') === -1 && localStorage.getItem('thereImage9?') === null) {
    sideImages.push('https://tse1.mm.bing.net/th?id=OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj&pid=Api&rs=1&c=1&qlt=95&w=148&h=111');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage9?', 'yes');
}





if (sideNames.indexOf('Item 10') === -1 && localStorage.getItem('thereName10?') === null) {
    sideNames.push('Item 10');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName10?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 10') === -1 && localStorage.getItem('thereDescription10?') === null) {
    sideDescriptions.push('Item 10');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription10?', 'yes');
}
    
if (sidePrices.indexOf('Item 10') === -1 && localStorage.getItem('therePrice10?') === null) {
    sidePrices.push('Item 10');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice10?', 'yes');
}
    
if (sideImages.indexOf('Item 10') === -1 && localStorage.getItem('thereImage10?') === null) {
    sideImages.push('Item 10');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage10?', 'yes');
}





if (sideNames.indexOf('Item 11') === -1 && localStorage.getItem('thereName11?') === null) {
    sideNames.push('Item 11');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName11?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 11') === -1 && localStorage.getItem('thereDescription11?') === null) {
    sideDescriptions.push('Item 11');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription11?', 'yes');
}
    
if (sidePrices.indexOf('Item 11') === -1 && localStorage.getItem('therePrice11?') === null) {
    sidePrices.push('Item 11');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice11?', 'yes');
}
    
if (sideImages.indexOf('Item 11') === -1 && localStorage.getItem('thereImage11?') === null) {
    sideImages.push('Item 11');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage11?', 'yes');
}





if (sideNames.indexOf('Item 12') === -1 && localStorage.getItem('thereName12?') === null) {
    sideNames.push('Item 12');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName12?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 12') === -1 && localStorage.getItem('thereDescription12?') === null) {
    sideDescriptions.push('Item 12');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription12?', 'yes');
}
    
if (sidePrices.indexOf('Item 12') === -1 && localStorage.getItem('therePrice12?') === null) {
    sidePrices.push('Item 12');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice12?', 'yes');
}
    
if (sideImages.indexOf('Item 12') === -1 && localStorage.getItem('thereImage12?') === null) {
    sideImages.push('Item 12');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage12?', 'yes');
}





if (sideNames.indexOf('Item 13') === -1 && localStorage.getItem('thereName13?') === null) {
    sideNames.push('Item 13');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName13?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 13') === -1 && localStorage.getItem('thereDescription13?') === null) {
    sideDescriptions.push('Item 13');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription13?', 'yes');
}
    
if (sidePrices.indexOf('Item 13') === -1 && localStorage.getItem('therePrice13?') === null) {
    sidePrices.push('Item 13');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice13?', 'yes');
}
    
if (sideImages.indexOf('Item 13') === -1 && localStorage.getItem('thereImage13?') === null) {
    sideImages.push('Item 13');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage13?', 'yes');
}





if (sideNames.indexOf('Item 14') === -1 && localStorage.getItem('thereName14?') === null) {
    sideNames.push('Item 14');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName14?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 14') === -1 && localStorage.getItem('thereDescription14?') === null) {
    sideDescriptions.push('Item 14');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription14?', 'yes');
}
    
if (sidePrices.indexOf('Item 14') === -1 && localStorage.getItem('therePrice14?') === null) {
    sidePrices.push('Item 14');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice14?', 'yes');
}
    
if (sideImages.indexOf('Item 14') === -1 && localStorage.getItem('thereImage14?') === null) {
    sideImages.push('Item 14');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage14?', 'yes');
}





if (sideNames.indexOf('Item 15') === -1 && localStorage.getItem('thereName15?') === null) {
    sideNames.push('Item 15');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName15?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 15') === -1 && localStorage.getItem('thereDescription15?') === null) {
    sideDescriptions.push('Item 15');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription15?', 'yes');
}
    
if (sidePrices.indexOf('Item 15') === -1 && localStorage.getItem('therePrice15?') === null) {
    sidePrices.push('Item 15');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice15?', 'yes');
}
    
if (sideImages.indexOf('Item 15') === -1 && localStorage.getItem('thereImage15?') === null) {
    sideImages.push('Item 15');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage15?', 'yes');
}





if (sideNames.indexOf('Item 16') === -1 && localStorage.getItem('thereName16?') === null) {
    sideNames.push('Item 16');
    localStorage.setItem('sideNames', JSON.stringify(sideNames));
    localStorage.setItem('thereName16?', 'yes');
}
    
if (sideDescriptions.indexOf('Item 16') === -1 && localStorage.getItem('thereDescription16?') === null) {
    sideDescriptions.push('Item 16');
    localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));
    localStorage.setItem('thereDescription16?', 'yes');
}
    
if (sidePrices.indexOf('Item 16') === -1 && localStorage.getItem('therePrice16?') === null) {
    sidePrices.push('Item 16');
    localStorage.setItem('sidePrices', JSON.stringify(sidePrices));
    localStorage.setItem('therePrice16?', 'yes');
}
    
if (sideImages.indexOf('Item 16') === -1 && localStorage.getItem('thereImage16?') === null) {
    sideImages.push('Item 16');
    localStorage.setItem('sideImages', JSON.stringify(sideImages));
    localStorage.setItem('thereImage16?', 'yes');
}





function retrieveItemsSides() {
    let sideBox = document.getElementsByClassName('Sides')[0];

    let btn = document.getElementsByClassName('btn-sides')[0];
    btn.setAttribute('disabled', true);

    

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

    let btn = document.getElementsByClassName('btn-sides')[0];
    btn.setAttribute('disabled', true);

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
        name.classList.add('item-name-side')
        name.innerHTML = sideNames.slice(0)[i];
        sideBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description-side');
        description.innerHTML = sideDescriptions.slice(0)[i];
        sideBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-side');
        price.innerHTML = `Price: ${sidePrices.slice(0)[i]}`;
        sideBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image-side');
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
        remove.classList.add('remove-side');
        remove.innerHTML = 'Remove';
        remove.addEventListener('click', function() {
            let removeArray = document.getElementsByClassName('remove-side');
            let names = document.getElementsByClassName('item-name-side');
            let descriptions = document.getElementsByClassName('item-description-side');
            let prices = document.getElementsByClassName('item-price-side');
            let images = document.getElementsByClassName('item-image-side');
            let managePriceArray = document.getElementsByClassName('managePrice-side');

            
            let index = Array.prototype.indexOf.call(removeArray, this);

            names[index].remove();
            descriptions[index].remove();
            prices[index].remove();
            images[index].remove();
            managePriceArray[index].remove();
            removeArray[index].remove();

            sideNames.splice(index, 1);
            localStorage.setItem('sideNames', JSON.stringify(sideNames));

            sideDescriptions.splice(index, 1);
            localStorage.setItem('sideDescriptions', JSON.stringify(sideDescriptions));

            sidePrices.splice(index, 1);
            localStorage.setItem('sidePrices', JSON.stringify(sidePrices));

            sideImages.splice(index, 1);
            localStorage.setItem('sideImages', JSON.stringify(sideImages));
        })
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




if (drinkNames.indexOf('Water') === -1 && localStorage.getItem('thereName17?') === null) {
    drinkNames.push('Water');
    localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    localStorage.setItem('thereName17?', 'yes');
}
    
if (drinkDescriptions.indexOf('Greasy water yum') === -1 && localStorage.getItem('thereDescription17?') === null) {
    drinkDescriptions.push('Greasy water yum');
    localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    localStorage.setItem('thereDescription17?', 'yes');
}
    
if (drinkPrices.indexOf('$1.00') === -1 && localStorage.getItem('therePrice17?') === null) {
    drinkPrices.push('$1.00');
    localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    localStorage.setItem('therePrice17?', 'yes');
}
    
if (drinkImages.indexOf('https://tse2.mm.bing.net/th?id=OIP.-fEj_aM7jxziXSuZhfeMqwHaHa&pid=Api&P=0&h=180') === -1 && localStorage.getItem('thereImage17?') === null) {
    drinkImages.push('https://tse2.mm.bing.net/th?id=OIP.-fEj_aM7jxziXSuZhfeMqwHaHa&pid=Api&P=0&h=180');
    localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
    localStorage.setItem('thereImage17?', 'yes');
}





if (drinkNames.indexOf('Item 18') === -1 && localStorage.getItem('thereName18?') === null) {
    drinkNames.push('Item 18');
    localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    localStorage.setItem('thereName18?', 'yes');
}
    
if (drinkDescriptions.indexOf('Item 18') === -1 && localStorage.getItem('thereDescription18?') === null) {
    drinkDescriptions.push('Item 18');
    localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    localStorage.setItem('thereDescription18?', 'yes');
}
    
if (drinkPrices.indexOf('Item 18') === -1 && localStorage.getItem('therePrice18?') === null) {
    drinkPrices.push('Item 18');
    localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    localStorage.setItem('therePrice18?', 'yes');
}
    
if (drinkImages.indexOf('Item 18') === -1 && localStorage.getItem('thereImage18?') === null) {
    drinkImages.push('Item 18');
    localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
    localStorage.setItem('thereImage18?', 'yes');
}





if (drinkNames.indexOf('Item 19') === -1 && localStorage.getItem('thereName19?') === null) {
    drinkNames.push('Item 19');
    localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    localStorage.setItem('thereName19?', 'yes');
}
    
if (drinkDescriptions.indexOf('Item 19') === -1 && localStorage.getItem('thereDescription19?') === null) {
    drinkDescriptions.push('Item 19');
    localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    localStorage.setItem('thereDescription19?', 'yes');
}
    
if (drinkPrices.indexOf('Item 19') === -1 && localStorage.getItem('therePrice19?') === null) {
    drinkPrices.push('Item 19');
    localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    localStorage.setItem('therePrice19?', 'yes');
}
    
if (drinkImages.indexOf('Item 19') === -1 && localStorage.getItem('thereImage19?') === null) {
    drinkImages.push('Item 19');
    localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
    localStorage.setItem('thereImage19?', 'yes');
}





if (drinkNames.indexOf('Item 20') === -1 && localStorage.getItem('thereName20?') === null) {
    drinkNames.push('Item 20');
    localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
    localStorage.setItem('thereName20?', 'yes');
}
    
if (drinkDescriptions.indexOf('Item 20') === -1 && localStorage.getItem('thereDescription20?') === null) {
    drinkDescriptions.push('Item 20');
    localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));
    localStorage.setItem('thereDescription20?', 'yes');
}
    
if (drinkPrices.indexOf('Item 20') === -1 && localStorage.getItem('therePrice20?') === null) {
    drinkPrices.push('Item 20');
    localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));
    localStorage.setItem('therePrice20?', 'yes');
}
    
if (drinkImages.indexOf('Item 20') === -1 && localStorage.getItem('thereImage20?') === null) {
    drinkImages.push('Item 20');
    localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
    localStorage.setItem('thereImage20?', 'yes');
}






function retrieveItemsDrinks() {
    let drinksBox = document.getElementsByClassName('Drinks')[0];

    let btn = document.getElementsByClassName('btn-drinks')[0];
    btn.setAttribute('disabled', true);

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

    let btn = document.getElementsByClassName('btn-drinks')[0];
    btn.setAttribute('disabled', true);

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
        name.classList.add('item-name-drink');
        name.innerHTML = drinkNames.slice(0)[i];
        drinkBox.appendChild(name);
    
        let description = document.createElement('p');
        description.classList.add('item-description-drink');
        description.innerHTML = drinkDescriptions.slice(0)[i];
        drinkBox.appendChild(description);
    
        let price = document.createElement('p');
        price.classList.add('item-price-drink');
        price.innerHTML = `Price: ${drinkPrices.slice(0)[i]}`;
        drinkBox.appendChild(price);
    
        let image = document.createElement('img');
        image.classList.add('item-image-drink');
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
        remove.classList.add('remove-drink');
        remove.innerHTML = 'Remove';
        remove.addEventListener('click', function() {
            let removeArray = document.getElementsByClassName('remove-drink');
            let names = document.getElementsByClassName('item-name-drink');
            let descriptions = document.getElementsByClassName('item-description-drink');
            let prices = document.getElementsByClassName('item-price-drink');
            let images = document.getElementsByClassName('item-image-drink');
            let managePriceArray = document.getElementsByClassName('managePrice-drink');

            
            let index = Array.prototype.indexOf.call(removeArray, this);

            names[index].remove();
            descriptions[index].remove();
            prices[index].remove();
            images[index].remove();
            managePriceArray[index].remove();
            removeArray[index].remove();

            drinkNames.splice(index, 1);
            localStorage.setItem('drinkNames', JSON.stringify(drinkNames));

            drinkDescriptions.splice(index, 1);
            localStorage.setItem('drinkDescriptions', JSON.stringify(drinkDescriptions));

            drinkPrices.splice(index, 1);
            localStorage.setItem('drinkPrices', JSON.stringify(drinkPrices));

            drinkImages.splice(index, 1);
            localStorage.setItem('drinkImages', JSON.stringify(drinkImages));
        })
        drinkBox.appendChild(remove);
    }
}
