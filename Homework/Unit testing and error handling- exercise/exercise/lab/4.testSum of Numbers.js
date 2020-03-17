let sum=require('./4.Sum of Numbers');
let assert=require('chai').assert;

describe('sum function',()=>{
    it('correct sum',()=>{
        let actualOutput=sum([1,2,3,4,5]);
        let expectedOutput=15;

        assert.equal(actualOutput,expectedOutput);
    });
    it('correct sum with negative',()=>{
        let actualOutput=sum([-1,-2,-3,-4,-5]);
        let expectedOutput=-15;

        assert.equal(actualOutput,expectedOutput);
    });
    it('correct sum with floating',()=>{
        let actualOutput=sum([1.1,2.1,3.1,4.1,5.1]);
        let expectedOutput=15.5;

        assert.equal(actualOutput,expectedOutput);
    });
});