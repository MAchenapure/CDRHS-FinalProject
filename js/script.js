let productsDB = [];
let cart = new Cart();
let arrayMP = []; 

window.onload = async () => {
    let responseDB = await fetch ("json/database.json");
    let aux = await responseDB.json();

    prodLoading(aux);
};

const prodLoading = (parameter) => {

    for (let i=0; i < parameter.length; i++){
        productsDB[i] = new Product();
        productsDB[i].setCategory(parameter[i].category);
        productsDB[i].setGender(parameter[i].gender);
        productsDB[i].setId(parameter[i].id);
        productsDB[i].setImage(parameter[i].img);
        productsDB[i].setName(parameter[i].name);
        productsDB[i].setPrice(parameter[i].unit_price);
        productsDB[i].setStock(parameter[i].stock);
        productsDB[i].setBrand(parameter[i].brand);

    }

    printProdCards();
    printUserCart();
}

let currentPath = window.location.pathname;
let currentPage = currentPath.split("/").pop();

const printProdCards = () => {
    
    if (currentPage == 'todo.html') {
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

const mercadoPagoController = async () => {
    createtArrayMP();

    $.ajax({
        url: 'https://api.mercadopago.com/checkout/preferences?access_token=TEST-2639659700398824-030403-0c2d5feb8488f5e4ee1478e4071ab85d-174385686',
        type: 'POST',
        data: JSON.stringify({
            "items": arrayMP
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        success : function(data){
            window.open(data.init_point);
        },
        back_urls: {
            "success": "https://www.success.com",
            "failure": "http://www.failure.com",
        }
    })
};

const createtArrayMP = () => {
    for(let i=0; i<cart.getLength(); i++) {
        arrayMP[i] = new ProductsMP();
        arrayMP[i].setName(cart.getProductName(i));
        arrayMP[i].setPrice(cart.getProductPrice(i));
        arrayMP[i].setQuantity(cart.getProductQuantity(i));
    }
}

// Checkbox logic

$('#checkbox-woman').change(e => {
    let element = document.getElementById('containerCard');

    if(e.target.checked){

        $('#checkbox-man').prop('checked',false);

        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }

        if (currentPage == 'todo.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if(productsDB[i].getGender() == 'femi') {
                    productsDB[i].printCard(i);
                }
            }
        } 

        if (currentPage == 'abrigo.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'warmCloth') && (productsDB[i].getGender() == 'femi')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'remeras.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'tshirt') && (productsDB[i].getGender() == 'femi')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'shorts.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'short') && (productsDB[i].getGender() == 'femi')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'zapatillas.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'shoes') && (productsDB[i].getGender() == 'femi')) {
                    productsDB[i].printCard(i);
                }
            }
        }

    } else {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
        printProdCards();
    }
});

$('#checkbox-man').change(e => {
    let element = document.getElementById('containerCard');

    if(e.target.checked){

        $('#checkbox-woman').prop('checked',false);

        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }

        if (currentPage == 'todo.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if(productsDB[i].getGender() == 'male') {
                    productsDB[i].printCard(i);
                }
            }
        } 

        if (currentPage == 'abrigo.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'warmCloth') && (productsDB[i].getGender() == 'male')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'remeras.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'tshirt') && (productsDB[i].getGender() == 'male')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'shorts.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'short') && (productsDB[i].getGender() == 'male')) {
                    productsDB[i].printCard(i);
                }
            }
        }
        if (currentPage == 'zapatillas.html') {
            for (let i = 0; i < productsDB.length; i++) {
                if ((productsDB[i].getCategory() == 'shoes') && (productsDB[i].getGender() == 'male')) {
                    productsDB[i].printCard(i);
                }
            }
        }

    } else {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
        printProdCards();
    }
});

