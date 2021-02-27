class Product{
    
    constructor(name, price, stock, img, gender, category){
        this.name=name;
        this.price=Number(price);
        this.stock=stock;
        this.img=img;
        this.gender=gender;
        this.cat=category;
        this.totalPrice=0;
        this.quantity=0;
    }

    getCategory(){
        return this.cat;
    }

    getGender(){
        return this.gender;
    }

    getTotalPrice(){
        return this.totalPrice;
    }

    getQuantity(){
        return this.quantity;
    }

    printCard(productIndex){
        let newNode = document.createElement('div');
        newNode.className = 'card-product'
        newNode.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <p>Precio: $${this.price}</p>
        <p>Cantidad: <input type="number" value="0" min="0" max="9" id="inputQuant${productIndex}"></p>
        <button onclick='cart.addProduct(${productIndex})'>Añadir al carrito</button>
        `
        document.getElementById("containerCard").appendChild(newNode); 
    }

    setQuantity(quant){
        this.quantity = quant;
    }

    setTotalPrice(){
        this.totalPrice = this.quantity*this.price;
    }
}