let productsDB = [];
let cart = new Cart();

window.onload = async () => {
    let responseDB = await fetch ("json/database.json");
    let aux = await responseDB.json();

    testing(aux);
};

const testing = (parameter) => {

    for (let i=0; i < parameter.length; i++){
        productsDB[i] = new Product();
        productsDB[i].setCategory(parameter[i].category);
        productsDB[i].setGender(parameter[i].gender);
        productsDB[i].setId(parameter[i].id);
        productsDB[i].setImage(parameter[i].img);
        productsDB[i].setName(parameter[i].name);
        productsDB[i].setPrice(parameter[i].price);
        productsDB[i].setStock(parameter[i].stock);
    }

    printProdCards();
    printUserCart();
}

const printProdCards = () => {
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
}

const printUserCart = () => {
    if (localStorage.getItem('cart') != null) {
        let storage = JSON.parse(localStorage.getItem('cart'));
        cart.addStorage(storage);
    }
    cart.printCart();
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