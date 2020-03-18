class Circle{
    constructor(radius){
        this.radius=radius;
        //this.diameter=this.diameter;
    }

    get diameter(){
        return this.radius*2;
    }

    set diameter(d){
        this.radius=d/2;
        this.innerdiameter=d;
    }

    get area(){
        return Math.PI*(this.radius**2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
