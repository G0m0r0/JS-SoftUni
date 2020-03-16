const aser=require('chai').assert;

describe("Array",function(){
    describe('method index of',function(){
        it('if not found should return -1',function(){
            let arr=[1,2,3,4];
            let result=arr.indexOf(9);
            assert.equal(result,-1);
        });
        it("if data is wrong type should throw",function(){
            let arr=[1,2,3,4];
            assert.throw(arr.indexOf('Pesho'));
        });
    });
});