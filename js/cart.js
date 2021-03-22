class Cart{

    constructor (){
        this.content = [];
        this.length = 0;
        this.totalCartPrice = 0;
    }
    
    addProduct(index){
        let quantityInput = parseInt(document.getElementById(`inputQuant${index}`).value);

        if (quantityInput > 0) {
            console.log(`quantity input: ${quantityInput}`);
            let repeated = false;
            for (let i = 0; i < cart.length; i++){
                if (this.content[i].id == productsDB[index].id){
                    console.log(`this content id: ${this.content[i].id}`);
                    this.content[i].quantity += quantityInput;
                    this.content[i].totalPrice = this.content[i].quantity*this.content[i].unit_price;
                    repeated = true;
                }
            }

            if(!repeated){
                productsDB[index].setQuantity(quantityInput);
                productsDB[index].setTotalPrice();
                this.content.push(productsDB[index]);
                this.setLength();
            }
            
            localStorage.setItem('cart', JSON.stringify(cart.getContent()));

            console.log(`print de cart`);

            this.printCart();

            $(`#prodAddCard${index}`).fadeIn(350, function(){
                $(`#prodAddCard${index}`).fadeOut(300);
            });          
        }
        else {
            $('#quantModal').fadeIn(150);
        }

    }

    addStorage(data){
        this.content = data;

        for(let i=0; i<this.length; i++) {
            this.content[i].unit_price = Number(this.content[i].unit_price);
            this.content[i].stock = Number(this.content[i].stock);
            this.content[i].totalPrice = Number(this.content[i].totalPrice);
            this.content[i].quantity = Number(this.content[i].quantity);
        }

        this.setLength();
    }

    getContent(){
        return this.content;
    }

    getContentIndex(i){
        return this.content[i];
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
        return this.content[index].unit_price;
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
        // Cart printing on header.  
        let element = document.getElementById('dropdownMenu');
        let elementBadget = document.getElementById('badgetCartCont');
        
        // While structure to delete all childs from dropdownMenu after adding a new product to the cart. Reboot the cart printing with the new elements.
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
        while (elementBadget.firstChild) {
            elementBadget.removeChild(elementBadget.lastChild);
        }
        
        
        if (cart.getLength() > 0) {
            $('.header-dropdown').css('width','25rem');
            $('.header-dropdown-mainbtn').css('width','5.3rem');
            
            for (let i = 0; i < cart.getLength(); i++) {
                let newNode = document.createElement('li');
                newNode.className = 'header-dropdown-item';
                newNode.innerHTML = `
                <img src="${cart.getProductImage(i)}">
                <div class="header-dropdown-info">
                    <h5>${cart.getProductName(i)}</h5>
                    <p>Cantidad: ${cart.getProductQuantity(i)}</p>
                </div>
                <div class="header-dropdown-price">
                    <p>Precio total: $${cart.getProductTotalPrice(i)}</p>
                </div>
                `
                element.appendChild(newNode);
            }
            
            let newNode = document.createElement('li');
            newNode.className = 'header-dropdown-btncontainer';
            newNode.innerHTML = `
            <a href="cart.html" class="header-dropdown-btn">Ver más detalles</a>
            `
            element.appendChild(newNode);

            let newNodeBadget = document.createElement('span');
            newNodeBadget.className = 'badge bg-secondary bg-danger';
            newNodeBadget.innerHTML = `
            ${cart.getLength()}
            `
            elementBadget.appendChild(newNodeBadget);

        } else {
            $('.header-dropdown').css('width','10.5rem');
            $('.header-dropdown-mainbtn').css('width','3.6rem');

            let newNode = document.createElement('li');
            newNode.className = 'header-dropdown-emptycart'
            newNode.innerHTML = `
            Tu carrito está vacio.
            `
            element.appendChild(newNode);
        }

        // Cart printing on cart.html
        if (document.querySelector('.main-cart')) {
            
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
                <button type="button" class="btn btn-primary cart-purchase-button" onclick="mercadoPagoController()">Comprar</button>
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
        this.length = this.content.length;
    }

    setTotalPrice(){
        this.totalPrice = this.quantity*this.unit_price;
    }

}