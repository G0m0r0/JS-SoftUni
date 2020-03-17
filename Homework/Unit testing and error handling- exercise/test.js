let sum=require('./functionality');
let assert=require('chai').assert;
let expect=require('chai').assert;
//console.log(assert);

describe('equal numbers',()=>{
    it('should equal 5',()=>{
     assert.equal(sum(1,4),5,'Not equal');
    });
    it('should equal 10',()=>{
        assert.equal(sum(1,8),9);
    });
    it('test',()=>{
        let result=sum(5,6);
        assert.equal(result,21,'error');
    });
});