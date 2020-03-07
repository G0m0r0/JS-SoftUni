let result=(function vectorMath(){
        return {
        add: (a,b)=>{
            let num1=a[0]+b[0];
            let num2=b[1]+a[1];
            return [num1,num2]
        },        
        multiply: (a,b)=>{return [a[0]*b,a[1]*b]},        
        length: (a,b)=>{return Math.sqrt(a[0]*a[0] + a[1]*a[1])},        
        dot:(a,b)=>{return Math.sqrt(a[0]*a[1]+b[0]*b[1])},        
        cross: (a,b)=>{return a[0]*b[1]-a[1]*b[0]},
        }    
}());

//cat: 'meow',
//dog: 'woof'


console.log(result.cross([3, 7], [1, 0]));