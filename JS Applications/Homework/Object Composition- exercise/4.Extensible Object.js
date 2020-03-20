function solution(){
    let myObj={
        extend: function (template){
            Object.keys(template).forEach((key)=>{
                if(typeof template[key]==="function"){
                    Object.getPrototypeOf(this)[key]=template[key];
                }else{
                    this[key]=template[key];
                }
            })
        }
    }

    myObj.extend({
        someKey:'123',
        somekey2: 123,
        someFunc: ()=>console.log('123'),
    });

   return myObj;
}

solution();