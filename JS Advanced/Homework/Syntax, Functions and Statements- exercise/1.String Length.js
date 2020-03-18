function fruit(fruit,gramms,price){

        let weightInKg=gramms/1000;
        let totalPrice=weightInKg*price;

        return  `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
        //return a+' '+b+' '+c;
}

//console.log('first','second','third')