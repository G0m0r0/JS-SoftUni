function gcd(a,b){
       let number1=a;
    let number2=b;
    while(number2!==0)
        {
            //let tempMod=number1%number2;
           // number1=number2;
           // number2=tempMod;
            
            [number1,number2]=[number2,number1%number2]
        }

        return number1;
}

console.log(gcd(14,10));
console.log(gcd(18,gcd(10,14)));
//gcd for three numbers and more