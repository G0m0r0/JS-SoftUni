var number={
    value: 5,
    calculate: function(num,operation){

            var sum=(nb)=>{
                return this.value+nb;
            }
            //optional var sum=()=>this.value+num

            var subtract=(nb)=>{
                return this.value-nb;
            }

            return sum(num);
    }
}

console.log(number.calculate(6,'sum')); //NaN if we this instead of that 
var f=number.calculate;

console.log(f(6)); //NaN point to the global object