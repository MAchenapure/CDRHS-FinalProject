let productsDB = [];
let cart = new Cart();

if (localStorage.getItem('cart') != null) {
    let storage = JSON.parse(localStorage.getItem('cart'));
    cart.addStorage(storage);
} else {
    console.log(`No hay datos cargados.`);
}

cart.printCart();

let zapNikeAirMot2 = new Product('Zapatillas Nike Airmax Motion 2', '9299', '10', 'imgs/nike-airmax-motion2.jpg');
let buzoPumaClass = new Product('Buzo Puma Classic', '5499', '15', 'imgs/buzo-puma-classic.jpg');
let zapAdiOrigRunRosa = new Product('Zapatillas Adidas Originals Run', '7499', '5', 'imgs/adidas-originals-run.jpg')

productsDB.push(zapNikeAirMot2);
productsDB.push(buzoPumaClass);
productsDB.push(zapAdiOrigRunRosa);

if (document.querySelector('.main-container')) {
    for (let i = 0; i < productsDB.length; i++) {
        productsDB[i].printCard(i);
    }
}

/* TODO Hacer que el dropdown del carrito se maneje a través de un evento onclick. Ese evento tendrá que llamar a una función que cambie la clase del "ul li" del dropdown y hacerlo visible.
Averiguar si el evento que cierre el dropbown tiene que ser "onblur". Ese evento tendrá que llamar a otra función que cambie la clase del "ul li" ocultándolo.
Para esto hay que cambiar el .css ya que ahora se están llamando a esos elementos por etiquetas y no por clases. Pasar todo a clases.
Esto también me va a permitir agregar margin-top al "ul li" */

// TODO Hacer que el dropdown del carrito esté alineado a partir de la esquina inferior derecha del icono del carrito hacia la izquierda. 

// TODO Hacer los estilos del header de nuevo para que sea responsive. Trabajar el título, el carrito y el logo con porcentajes de left/right. El título se puede centrar.  

// TODO Se puede agregar un id de producto para hacer un if en el addProduct() y sumar la cantidada solicitada con la ya registrada. 