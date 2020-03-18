let createCalculator=require('./7. Add Subtract');
let assert=require('chai').assert;


describe('test calculator',()=>{
    let actualResult;
    let expectedResult;
    let calculator;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
        calculator=createCalculator();
    });

    it('add function',()=>{
        calculator.add(5);
        expectedResult=5;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('add function',()=>{
        calculator.add(5);
        calculator.add(10);
        expectedResult=15;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('add function',()=>{
        calculator.add(-5);
        expectedResult=-5;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('substract function',()=>{
        calculator.subtract(100);
        expectedResult=-100;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('substract function',()=>{
        calculator.subtract(100);
        calculator.subtract(100);
        expectedResult=-200;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('substract function',()=>{
        calculator.add(100);
        calculator.subtract(100);
        expectedResult=0;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('no action',()=>{
        expectedResult=0;
        actualResult=calculator.get();

        assert.equal(actualResult,expectedResult);
    });
    it('no action',()=>{
        calculator.add(10);
        calculator.add(0);
        actualResult=calculator.get();
        expectedResult=10;

        assert.equal(actualResult,expectedResult);
    });
    it('test get',()=>{
        calculator.add(-10);
        calculator.add(0);
        calculator.subtract(100);
        expectedResult=-110;

        assert.equal(calculator.get(),expectedResult);
    });
    it('calculate empty',()=>{
        assert.equal(calculator.get(),0);
    });
    it('test get',()=>{
        calculator.add(-10.5);
        calculator.add(0.5);
        calculator.subtract(0);
        expectedResult=-10;

        assert.equal(calculator.get(),expectedResult);
    });
    it('get NaN',()=>{
        actualResult= calculator.add('string');
        expectedResult=undefined;

        assert.equal(actualResult,expectedResult);
    });
    it('get NaN',()=>{
        calculator.add('string');
        actualResult=calculator.get();

        assert.isNaN(actualResult);
    });
    it('get NaN',()=>{
        calculator.subtract('string');
        actualResult=calculator.get();

        assert.isNaN(actualResult);
    });
    it('many operations',()=>{
        calculator.add(10);
        calculator.subtract(15);
        calculator.add(10);
        calculator.subtract(20.5);
        actualResult=calculator.get();
        expectedResult=-15.5;
        
        assert.equal(actualResult,expectedResult);
    });
})