let rec={
    width: 10,
    height: 4,
    grow: function(w,h){
        this.width+=w;
        this.height+=h;
    },
    print: function(){
        console.log(`[${this.width}x${this.height}]`);
    }
};

rec.grow(2,3);
rec.print(); //[12x7]