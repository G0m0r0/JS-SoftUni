    //two ways to create class
    class Rectangle{
        constructor(height,width,color){
            this.height=height;
            this.width=width;
            this.color=color;
        }

        calcArea(){
            return this.height*this.width;
        }
    }

    //name Rectangle2 is not necessery
    let myRec=class Rectangle2{
        constructor(height,width){
            this.height=height;
            this.width=width;
        }
    }


const rectangle=new Rectangle(5,4,'yellow');
console.log(rectangle.calcArea());