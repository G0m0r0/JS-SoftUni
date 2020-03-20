function solve(nestedArray){
    let arrayOfObjects=[];
    for (let i = 0; i < nestedArray.length; i++) {
        const[width,height]=nestedArray[i];
        const rectangle={
                width: width,
                height: height, 
                area: function (){
                    return width*height;
                },
                compareTo: function(other){
                    if(other.area()===this.area()){
                        return 0;
                    }else if(other.area()>this.area()){
                        return -1;
                    }else{
                        return 1;
                    }
                }          
        }
        arrayOfObjects.push(rectangle);
    }

    arrayOfObjects.sort((a,b)=>{
        if(b.compareTo(a)===0){
            return b.width-a.width;
        }
        return b.compareTo(a);
    });

    return arrayOfObjects;
}

//const rectangles=solve([[10,5],[5,12]]);
//console.log(rectangles[0].compareTo(rectangles[1]));
console.log(solve([[1,20],[20,1],[5,3],[5,3]]));