let productsDB = [];
let cart = new Cart();

if (localStorage.getItem('cart') != null) {
    let storage = JSON.parse(localStorage.getItem('cart'));
    cart.addStorage(storage);
}
cart.printCart();

let zapNikeAirMot2 = new Product('Zapatillas Nike Airmax Motion 2', '9299', '10', 'imgs/nike-airmax-motion2.jpg', 'male', 'shoes');
let buzPumaClass = new Product('Buzo Puma Classic', '5499', '15', 'imgs/buzo-puma-classic.jpg', 'male', 'warmCloth');
let zapAdiOrigRunRosa = new Product('Zapatillas Adidas Originals Run', '7499', '5', 'imgs/adidas-originals-run.jpg', 'femi', 'shoes');
let remPumaTech = new Product('Remera Puma Tech', '2199', '10', 'imgs/remera-pum-tech1.jpg', 'male', 'tshirt');
let shoNikeFlex = new Product('Short Nike Flex', '4499', '10', 'imgs/short-nike-flex1.jpg', 'male', 'short');
let remAdiMyTee = new Product('Remera Adidas My Tee', '1539', '10', 'imgs/remera-adidas-mytee1.jpg', 'femi', 'tshirt');
let zapConvAllChuck = new Product('Zapatillas Converse All Star Chuck Taylor', '7595', '10', 'imgs/zap-converse-chuck-allstar1.jpg', 'femi', 'shoes');
let shoNike10kGlam = new Product('Short Nike 10K Glam Gx', '3999', '10', 'imgs/short-nike-10k-glam-gx1.jpg', 'femi', 'short');
let camNikeSportswear = new Product('Campera Nike Sportswear Windrunner', '10999', '10', 'imgs/campera-nike-sportswear1.jpg', 'male', 'warmCloth');

productsDB.push(zapNikeAirMot2);
productsDB.push(buzPumaClass);
productsDB.push(zapAdiOrigRunRosa);
productsDB.push(remPumaTech);
productsDB.push(shoNikeFlex);
productsDB.push(remAdiMyTee);
productsDB.push(zapConvAllChuck);
productsDB.push(shoNike10kGlam);
productsDB.push(camNikeSportswear);

let currentPath = window.location.pathname;
let currentPage = currentPath.split("/").pop();

if (currentPage == 'index.html') {
    for (let i = 0; i < productsDB.length; i++) {
        productsDB[i].printCard(i);
    }
}

if (currentPage == 'hombre.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getGender() == 'male') {
            productsDB[i].printCard(i);
        }
    }
}

if (currentPage == 'mujer.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getGender() == 'femi') {
            productsDB[i].printCard(i);
        }
    }
}

if (currentPage == 'abrigo.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getCategory() == 'warmCloth') {
            productsDB[i].printCard(i);
        }
    }
}

if (currentPage == 'remeras.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getCategory() == 'tshirt') {
            productsDB[i].printCard(i);
        }
    }
}

if (currentPage == 'shorts.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getCategory() == 'short') {
            productsDB[i].printCard(i);
        }
    }
}

if (currentPage == 'zapatillas.html') {
    for (let i = 0; i < productsDB.length; i++) {
        if (productsDB[i].getCategory() == 'shoes') {
            productsDB[i].printCard(i);
        }
    }
}


// Modal closing logic.
$("#modalClose").click(function(){
    $("#quantModal").fadeOut(150);
});

$(window).click(function(event){
    if (event.target.id == 'quantModal') {
        $("#quantModal").fadeOut(150);
    }
})


// TODO Se puede agregar un id de producto para hacer un if en el addProduct() y sumar la cantidada solicitada con la ya registrada. 