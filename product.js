class Product{
    
    constructor(name, price, stock, img){
        this.name=name;
        this.price=price;
        this.stock=stock;
        this.img=img;
    }

    printCard(){
        let newNode = document.createElement('div');
        newNode.className = 'card'
        newNode.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <p>Precio: $${this.price}</p>
        <a href="#">Comprar</a>
        `
        document.getElementById("containerCard").appendChild(newNode); 
    }
}