function area() {
    return this.x * this.y;
};
function vol() {
    return this.x * this.y * this.z;
};
function solve(area, vol, input) {
    input=JSON.parse(input);

    let result=[];
   for (let i = 0; i < input.length; i++) {
       let obj={};
       let token=input[i];
       let curArea=Math.abs( area.call(token));
       let curVol=Math.abs( vol.call(token));
       obj={
           area: curArea,
           volume: curVol
       };
       result.push(obj);
   }

   return result;
}

console.log(solve(area, vol, [{'x':'10','y':'-22','z':'10'},{'x':'47','y':'7','z':'-5'},{'x':'55','y':'8','z':'0'},{'x':'100','y':'100','z':'100'},{'x':'55','y':'80','z':'250'}]));
