class Kitchen{
    constructor(budget){
        this.budget=budget;
        this.menu={};
        this.productsInStock={};
        this.actionsHistory=[];
    }

    loadProducts(arrayOfProducts){
        for (let i = 0; i < arrayOfProducts.length; i++) {
            let tokens=arrayOfProducts[i].split(' ');
            let product=tokens[0];
            let quantity=tokens[1];
            let price=tokens[2];

            if(!this.productsInStock[product]!=undefined){
                if(this.budget-price>0){
                    this.productsInStock[product]=quantity;
                    this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`) 
                    this.budget-=price;
                }else{
                    this.actionsHistory.push(`There was not enough money to load ${quantity} ${product}`)
                }
            }else {
                this.productsInStock[product]+=quantity;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`) 
            }            
        }
       return this.actionsHistory.join('\n');        
    }

    addToMenu(meal,neededProducts,price){
        if(this.menu[meal]!==undefined){ 
            return `The ${meal} is already in our menu, try something different.`;         
        }        
        
        this.menu[meal]={
            price,
            neededProducts: neededProducts.map(x=>x.split(' '))
            .map(([productName,productQuantity])=>({productName,productQuantity: Number(productQuantity)}))
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;                   
    }

    showTheMenu(){
      if(Object.keys(this.menu).length===0){
        return "Our menu is not ready yet, please come later...";
       }

       let result='';
       Object.entries(this.menu).forEach(([name,value])=>{
           result+= `${name} - $ ${value.price}\n`;
       })
       return result.trim();
    }

    checkForProducts(requirment,availableProducts){
        return requirment.neededProducts.every(neededProduct=>
            !!availableProducts[neededProduct.productName]&&
            availableProducts[neededProduct.productName]>=neededProduct.productQuantity);   
    }

    deduceProducts(meal,availableProducts){
        meal.neededProducts.map(neededProduct=>
            availableProducts[neededProduct.productName]-=neededProduct.productQuantity);  
    }

    makeTheOrder(meal){
        if(this.menu[meal]==undefined){
           return`There is not ${meal} yet in our menu, do you want to order something else?` ;
        }

        if(this.checkForProducts(this.menu[meal],this.productsInStock)){
            let priceForMeal=this.menu[meal].price;
            this.budget+=priceForMeal;
            this.deduceProducts(this.menu[meal],this.productsInStock);

            return`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${priceForMeal}.`;
        }else{
            return`For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }
}
    
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log();
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log();
console.log(kitchen.showTheMenu());
console.log();
console.log(kitchen.makeTheOrder('frozenYogurt'));

