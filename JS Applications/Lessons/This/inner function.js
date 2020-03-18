var number={
    value: 5,
    calculate: function(num,operation){
        var that=this;

            function sum(nb){
                return that.value+nb;
            }

            function subtract(nb){
                return that.value-nb;
            }

            return sum(num);
    }
}

console.log(number.calculate(6,'sum')); //NaN if we this instead of that 