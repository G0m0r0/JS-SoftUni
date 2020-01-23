function coffeMachine(params)
{
     let priceList={
         caffeine: (x)=>0.8,
         decaf: (x)=>0.9,
         tea: (x)=>0.8,
     }

     let totalMoney=0;
    for(let i=0;i<params.length; i++)
    {
        let input=params[i].split(", ");
        let coins=input[0];
        let typeOfDrink=input[1];
        let price=0;

        if(typeOfDrink==="tea")
        {
            price+=0.8;
        }
        let typeOfCoffe=" ";
        let milk=" ";
        let sugarQuanity=0;

    if(typeOfDrink==="coffee")
    {
        typeOfCoffee=input[2];
        if(typeOfCoffee==="caffeine")
        {
            price+=0.8;
        }
        else if(typeOfCoffe==="decaf")
        {
            price+=0.9;
        }
        if(input.length>4)
        {
             milk=input[3];
             price+=(Math.ceil(price*0.1 * 10) / 10);
        }
        
        sugarQuanity=parseInt(input[4]);
    }
    else
    {
        if(input.length>3)
        {
            milk=input[2];
            price+=(Math.ceil(price*0.1 * 10) / 10);
        }
         
         sugarQuanity=parseInt( input[3]);
    }
     if(sugarQuanity!==0)
     {
        price+=0.1;
     }
    
     if(price<=coins)
     {
        console.log(`You ordered ${typeOfDrink}. Price: $${price} Change: $${coins-price}`);
        totalMoney+=price;
     }
     else
     {
         console.log(`Not enough money for ${typeOfDrink}. Need $${price-coins} more`)
     }
    }    
    console.log(`Income Report: $${totalMoney}`)
}

coffeMachine([
    '1.00, coffee, caffeine, milk, 4', 
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);