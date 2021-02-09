class Cart{

    constructor (){
        this.content = [];
        this.length = 0;
        this.totalCartPrice = 0;
    }
    
    addProduct(index){
        productsDB[index].setQuantity(parseInt(document.getElementById(`inputQuant${index}`).value));
        productsDB[index].setTotalPrice();
        this.content.push(productsDB[index]);
        localStorage.setItem('cart', JSON.stringify(cart.getContent()));
        for(let i=0; i<this.length; i++) {
            this.content[i].price = Number(this.content[i].price);
            this.content[i].stock = Number(this.content[i].stock);
        }
        this.setLength();
        this.printCart();
    }

    addStorage(data){
        this.content = data;

        for(let i=0; i<this.length; i++) {
            this.content[i].price = Number(this.content[i].price);
            this.content[i].stock = Number(this.content[i].stock);
        }

        this.setLength();
    }

    getContent(){
        return this.content;
    }

    
    getLength(){
        return this.length;
    }
    
    getProduct(index){
        return this.content[index];
    }

    getProductImage(index){
        return this.content[index].img;
    }

    getProductName(index){
        return this.content[index].name;
    }

    getProductPrice(index){
        return this.content[index].price;
    }

    getProductQuantity(index){
        return this.content[index].quantity;
    }

    getProductTotalPrice(index){
        return this.content[index].totalPrice;
    }

    getTotalCartPrice(){
        let acum = 0;

        for(let i=0; i<this.length; i++){
            acum += this.content[i].totalPrice;
        }

        this.totalCartPrice = acum;

        return this.totalCartPrice;
    }

    printCart(){
        if (document.querySelector('.main')) { // Cart printing on index.html - TODO Falta diseñar el dropdown en el icono del carrito. 

            // let element = document.getElementById('containerCart');
            // console.log(`Logged by printCart. Main page.`)
            // for(let i=0; i<cart.length; i++){
            //     let newNode = document.createElement('div');
            //     newNode.innerHTML = `
            //     <img src="${cart[i].img}">
            //     <h6>${cart[i].name}</h6>
            //     <p>Precio: $${cart[i].price}</p>
            //     `
            //     element.appendChild(newNode);
            // }
    
        } else if (document.querySelector('.main-cart')) { // Cart printing on cart.html
            
            let element = document.getElementById('containerCart-cartPage');
            let elementCartEmpty = document.getElementById('containerCartEmpty');
            let elementFinalPrice = document.getElementById('totalPriceContainer');

            if (cart.getLength() > 0) {

                // While structure to delete all childs from containerCart after adding a new product to the cart. Reboot the cart printing with the new elements.
                while (element.firstChild) {
                    element.removeChild(element.lastChild);
                }

                while (elementCartEmpty.firstChild) {
                    elementCartEmpty.removeChild(elementCartEmpty.lastChild);
                }
    
                for (let i = 0; i < cart.getLength(); i++) {
                    let newNode = document.createElement('div');
                    newNode.className = 'cart-card'
                    newNode.innerHTML = `
                    <div class="cart-card-img">
                        <img src="${cart.getProductImage(i)}">
                    </div>
                    <div class="cart-card-info">
                        <h2>${cart.getProductName(i)}</h2>
                        <p>Precio unitario: $${cart.getProductPrice(i)}</p>
                        <p>Cantidad: ${cart.getProductQuantity(i)}</p>
                    </div>
                    <div class="cart-card-price">
                        <p>$${cart.getProductTotalPrice(i)}</p>
                    </div>
                    <div class="cart-card-remove">
                        <button onclick='cart.removeProduct(${i})'>
                            <img src="imgs/remove-icon.jpg" alt="Remove item" srcset="">
                        </button>
                    </div>
                    `
                    element.appendChild(newNode);
                }
                
                while (elementFinalPrice.firstChild) {
                    elementFinalPrice.removeChild(elementFinalPrice.lastChild);
                }
        
                let newNode = document.createElement('div');
                newNode.className = 'cart-totalprice-container';
                newNode.innerHTML = `
                <div class="cart-totalprice-text">
                <span>Precio total</span>
                </div>
                <div class="cart-totalprice">
                <span>$${cart.getTotalCartPrice()}</span>
                </div>
                `
                elementFinalPrice.appendChild(newNode);
            } else {

                while (element.firstChild) {
                    element.removeChild(element.lastChild);
                }
                while (elementFinalPrice.firstChild) {
                    elementFinalPrice.removeChild(elementFinalPrice.lastChild);
                }

                let newNode = document.createElement('span');
                newNode.innerHTML = `
                Tu carrito está vacío
                `
                elementCartEmpty.appendChild(newNode);
            }
        }
    }

    removeProduct(prodIndex){
        let aux = [];

        for(let i=0; i<this.length; i++){
            if(prodIndex != i){
                aux.push(this.content[i]);
            }
        }

        this.content = aux;
        this.setLength();

        localStorage.setItem('cart',JSON.stringify(cart.getContent()));

        this.printCart();

        let element = document.getElementById('containerCart-cartPage');
        if(!element.firstChild) {
            localStorage.removeItem('cart');
        }
    }

    setLength(){
        this.length = this.content.length
    }

}

