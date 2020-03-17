let isSymetric=require('./5.Check for Symmetry');
let assert=require('chai').assert;
let expect=require('chai').expect;

describe('test symetric func',()=>{
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });

    it('non array',()=>{
        actualResult=isSymetric({});
        expectedResult=false;

        assert.equal(actualResult,expectedResult);
    });
    it('array is symetric',()=>{
        actualResult=isSymetric([1,2,1]);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is symetric',()=>{
        actualResult=isSymetric([1,2,2,1]);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric([-1,2,1]);
        expectedResult=false;

        assert.equal(actualResult,expectedResult);
    });
    it('array is symetric',()=>{
        actualResult=isSymetric([{a:5},2,{a:5}]);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric([1,4,2,1]);
        expectedResult=false;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric(['a','b','b','a']);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric(['-','-','-','-']);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric([]);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric([5]);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric(['aa','bb','aa']);
        expectedResult=true;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric(['.','-','-']);
        expectedResult=false;

        assert.equal(actualResult,expectedResult);
    });
    it('array is not symetric',()=>{
        actualResult=isSymetric(['a','bb','aa']);
        expectedResult=false;

        assert.equal(actualResult,expectedResult);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymetric([5, 'hi', {
            a: 5
        }, new Date(), {
            a: 5
        }, 'hi', 5])).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function () {
        expect(isSymetric([5, 'hi', {
            a: 5
        }, new Date(), {
            X: 5
        }, 'hi', 5])).to.be.equal(false);
    });
    it("should return false for 1,2,2,1", function () {
        expect(isSymetric(1, 2, 2, 1)).to.be.equal(false);
    });
    it("should return false for [1,2]", function () {
        expect(isSymetric([1, 2])).to.be.equal(false);
    });
    it("should return true for [1]", function () {
        expect(isSymetric([1])).to.be.equal(true);
    });
    it("should return true for [-1,2,-1]", function () {
        expect(isSymmetric([-1, 2, -1])).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
    });
});