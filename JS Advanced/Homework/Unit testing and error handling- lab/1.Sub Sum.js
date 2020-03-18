function subSumArray(array,starIndex,lastIndex){
    try{
        if(!Array.isArray(array)){
            //throw new Error('NaN');    
            return 'NaN'        ;
        }
        if(starIndex<0){
            starIndex=0;
        }
        if(lastIndex>array.length){
            lastIndex=array.length;
        }

        for (let i = starIndex; i < lastIndex; i++) {
            if(typeof array[i] !== 'number'){
                //throw new Error('NaN');
                return 'NaN';
            }
        }

        let sum=array.slice(starIndex,lastIndex+1).reduce((a, b) => a + b, 0).toFixed(2);
        return +sum;
    }catch(ex){
        return ex.message;
    }
    
}

console.log(subSumArray([10, 'twenty', 30, 40], 0, 2));