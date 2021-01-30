let dataBase = [];

let zapNikeAirMot2 = new Product('Zapatillas Nike Airmax Motion 2', '9299', '10', 'imgs/nike-airmax-motion2.jpg');
let buzoPumaClass = new Product('Buzo Puma Classic', '5499', '15', 'imgs/buzo-puma-classic.jpg');
let zapAdiOrigRunRosa = new Product('Zapatillas Adidas Originals Run', '7499', '5', 'imgs/adidas-originals-run.jpg')

dataBase[0] = zapNikeAirMot2;
dataBase[1] = buzoPumaClass;
dataBase[2] = zapAdiOrigRunRosa;

for (let i=0; i<dataBase.length; i++){
    dataBase[i].printCard();
}
