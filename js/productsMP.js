class ProductsMP {
    constructor (){
        this.name = null;
        this.unit_price = null;
        this.quantity = null;
        this.currency_id = 'ARS';
    }

    setName(name){
        this.name = name;
    }

    setPrice(unit_price){
        this.unit_price = Number(unit_price);
    }

    setQuantity(quantity){
        this.quantity = Number(quantity);
    }
}