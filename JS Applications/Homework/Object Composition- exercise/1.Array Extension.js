(function (input) {
    Array.prototype.last=function(){
        return this[this.length-1];
    }
    Array.prototype.skip=function(n){
        return this.slice(n);
    }

    Array.prototype.take=function(n){
        return this.slice(0,n);
    }
    Array.prototype.sum=function(){
        return this.reduce((a,b)=>a+b,0);
    }
    Array.prototype.average=function(){
        let sum= this.reduce((a,b)=>a+b,0);
        return sum/this.length;
    }
})();