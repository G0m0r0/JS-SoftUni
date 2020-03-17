let mathEnforcer=require('./4.Math Enforcer');
let assert=require('chai').assert;
let closeTo=require('chai').closeTo;

describe('errors',()=>{
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });

    describe('addFive',()=>{
        it('undefined',()=>{
            actualResult=mathEnforcer.addFive([1,2,3,4]);
            expectedResult=undefined;
    
            assert.equal(actualResult,expectedResult);
        });
        it('adding five',()=>{
            actualResult=mathEnforcer.addFive(5);
            expectedResult=10;
    
            assert.equal(actualResult,expectedResult);
        });
        it('adding five to negative',()=>{
            actualResult=mathEnforcer.addFive(-50);
            expectedResult=-45;
    
            assert.equal(actualResult,expectedResult);
        });
        it('adding five to floating',()=>{
            actualResult=mathEnforcer.addFive(5.5);
            expectedResult=10.5;
    
            assert.equal(actualResult,expectedResult);
        });
    }); 

    describe('subtractTen',()=>{
        it('undefined',()=>{
            actualResult=mathEnforcer.subtractTen([]);
            expectedResult=undefined;

        assert.equal(actualResult,expectedResult);
        });

        it('correct',()=>{
            actualResult=mathEnforcer.subtractTen(10);
        expectedResult=0;

        assert.equal(actualResult,expectedResult);
        });
        it('correct with negative',()=>{
            actualResult=mathEnforcer.subtractTen(-10);
        expectedResult=-20;

        assert.equal(actualResult,expectedResult);
        });
        it('correct with floating',()=>{
            actualResult=mathEnforcer.subtractTen(10.5);
        expectedResult=0.5;

        assert.equal(actualResult,expectedResult);
        });
    });

    describe('sum',()=>{
        it('undefined1',()=>{
            actualResult=mathEnforcer.sum([],5)
            expectedResult=undefined;

            assert.equal(actualResult,expectedResult);
        });
        it('undefined2',()=>{
            actualResult=mathEnforcer.sum(5,[])
            expectedResult=undefined;

            assert.equal(actualResult,expectedResult);
        });
        it('undefined3',()=>{
            actualResult=mathEnforcer.sum([],[])
            expectedResult=undefined;

            assert.equal(actualResult,expectedResult);
        });
        it('correct',()=>{
            actualResult=mathEnforcer.sum(5,5)
            expectedResult=10;

            assert.equal(actualResult,expectedResult);
        });
        it('correct with negative',()=>{
            actualResult=mathEnforcer.sum(-5,-5)
            expectedResult=-10;

            assert.equal(actualResult,expectedResult);
        });
        it('correct with floating',()=>{
            actualResult=mathEnforcer.sum(5.5,5.5)
            expectedResult=11;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('testFunc',()=>{
        it('check for object',()=>{
            assert.isObject(mathEnforcer);
        })
    })
})