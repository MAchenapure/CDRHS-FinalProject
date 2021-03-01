class Product{
    
    constructor(){
        this.name = null;
        this.price  = null;
        this.stock = null;
        this.id = null;
        this.img = null;
        this.gender = null;
        this.cat = null;
        this.totalPrice=0;
        this.quantity=0;
    }

    addMoreQuant(quant){
        this.quantity += quant;
        console.log(`add more quant: ${quant}`);
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
        newNode.className = 'card-product';
        newNode.id = `prodCard${productIndex}`;
        newNode.innerHTML = `
        <img src="${this.img}">
        <h4>${this.name}</h4>
        <p>Precio: $${this.price}</p>
        <p>Cantidad: <input type="number" value="0" min="0" max="9" id="inputQuant${productIndex}"></p>
        <button onclick='cart.addProduct(${productIndex})'>Añadir al carrito</button>
        <div class="card-product-added" id="prodAddCard${productIndex}"></div>
        `;
        document.getElementById("containerCard").appendChild(newNode); 
    }

    setCategory(cat){
        this.cat = cat;
    }

    setGender(gender){
        this.gender = gender;
    }

    setId(id){
        this.id = id;
    }

    setImage(img){
        this.img = img;
    }

    setName(name){
        this.name = name;
    }

    setPrice(price){
        this.price = Number(price);
    }

    setQuantity(quant){
        this.quantity = quant;
    }

    setStock(stock){
        this.stock = Number(stock);
    }

    setTotalPrice(){
        this.totalPrice = this.quantity*this.price;
    }

}