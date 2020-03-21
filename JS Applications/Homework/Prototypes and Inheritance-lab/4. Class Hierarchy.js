function classHerarcy(){
    class Figure{
        constructor(){
            this.unit='cm';
        }

        changeUnits(unit){
            this.unit=unit;
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super(),
            this.radius=radius
        }

        get area(){
            return Math.PI*this.radius*this.radius;
        }

        changeUnits(unit){
            this.unit=unit;
            if(unit==='m'){
                this.radius=this.radius/100;
            }else if(unit==='mm'){
                this.radius=this.radius*100;
            }
        }

        toString(){
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        constructor(width,height){
            super(),
            this.width=width,
            this.height=height
        }
        get area(){
            return this.width*this.height;
        }

        changeUnits(unit){
            this.unit=unit;
            if(unit==='m'){
                this.width/=100;
                this.height/=100;
            }else if(unit==='mm'){
                this.width*=100;
                this.height*100;
            }
        }

        toString(){
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

    return {
        Figure,
        Circle,
        Rectangle
    }
}

classHerarcy();
