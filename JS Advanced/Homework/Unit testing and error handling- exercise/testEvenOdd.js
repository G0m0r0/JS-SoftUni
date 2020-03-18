let isOddOrEven=require('./2.Even or Odd');
let assert=require('chai').assert;

describe('results',()=>{
    it('undefined',()=>{
        let result=isOddOrEven(5);
        assert.equal(result,undefined);
    });
    it('odd',()=>{
        let result=isOddOrEven('a');
        assert.equal(result,'odd');
    });
    it('even',()=>{
        let result=isOddOrEven('aa');
        assert.equal(result,'even');
    });
})