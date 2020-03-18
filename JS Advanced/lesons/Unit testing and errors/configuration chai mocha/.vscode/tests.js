let sum=require('./js');
let assert=require('chai').assert;
let expect=require('chai').assert;
//console.log(sum(5,6));

describe('SUM TWO NUMBERS ',()=>{
    it('check result',()=>{
        let result=sum(5,35);

        assert.equal(result,42,'the result is wrong');
    });
    it('check sum',()=>{
        let result=sum(5,10);
        expect(result).to.be.equal(15);
    })
});