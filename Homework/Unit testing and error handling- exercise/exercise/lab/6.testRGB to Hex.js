let rgbToHexColor=require('./6.RGB to Hex');
let assert=require('chai').assert;

describe('rgb to hencolor',()=>{
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });

    it('negative index',()=>{
        actualResult=rgbToHexColor(-5,5,5);
        expectedResult=undefined;

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(5,-5,5);

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(5,5,-5);

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(-5,-5,-5);

        assert.equal(actualResult,expectedResult);
    });

    it('bigger index',()=>{
        actualResult=rgbToHexColor(300,5,5);
        expectedResult=undefined;

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(5,300,5);

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(5,5,300);

        assert.equal(actualResult,expectedResult);

        actualResult=rgbToHexColor(300,300,300);

        assert.equal(actualResult,expectedResult);
    });

    it('correct answear',()=>{
        actualResult=rgbToHexColor(255,255,255);
        let num1=255;
        let num2=255;
        let num3=255;
        expectedResult="#" +
        ("0" + num1.toString(16).toUpperCase()).slice(-2) +
        ("0" + num2.toString(16).toUpperCase()).slice(-2) +
        ("0" + num3.toString(16).toUpperCase()).slice(-2);

        assert.equal(actualResult,expectedResult);
    });
    it('correct answear',()=>{
        actualResult=rgbToHexColor(0,0,0);
        let num1=0;
        let num2=0;
        let num3=0;
        expectedResult="#" +
        ("0" + num1.toString(16).toUpperCase()).slice(-2) +
        ("0" + num2.toString(16).toUpperCase()).slice(-2) +
        ("0" + num3.toString(16).toUpperCase()).slice(-2);

        assert.equal(actualResult,expectedResult);
    });
    it('correct answear',()=>{
        actualResult=rgbToHexColor(12,13,14);
        let num1=12;
        let num2=13;
        let num3=14;
        expectedResult="#" +
        ("0" + num1.toString(16).toUpperCase()).slice(-2) +
        ("0" + num2.toString(16).toUpperCase()).slice(-2) +
        ("0" + num3.toString(16).toUpperCase()).slice(-2);

        assert.equal(actualResult,expectedResult);
    });
});