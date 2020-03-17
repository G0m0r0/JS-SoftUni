let lookupChar=require('./3.Char Lookup');
let assert=require('chai').assert;

describe('test',()=>{
    it('undefined1',()=>{
        let result=lookupChar(false,0);

        assert.equal(result,undefined);
    });
    it('undefined2',()=>{
        let result=lookupChar('false','hdhd');

        assert.equal(result,undefined);
    });
    it('undefined3',()=>{
        let result=lookupChar('false',3.14);

        assert.equal(result,undefined);
    });
    it('incorrect index1',()=>{
        let result=lookupChar('false',-5);

        assert.equal(result,"Incorrect index");
    });
    it('incorrect index2',()=>{
        let result=lookupChar('false',15);

        assert.equal(result,"Incorrect index");
    });
    it('correct',()=>{
        let result=lookupChar('false',2);

        assert.equal(result,'l');
    });
});