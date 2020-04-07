let BookStore = require('./solution.js');
let assert=require('chai').assert;

describe('EXAM', function () {
    let actualResult;
    let expectedResult;
    let bookStore;

    beforeEach(()=>{
        bookStore=new BookStore('name');
        actualResult=null;
        expectedResult=null;
    });

    describe('Constructor',()=>{
        it('correct initialization',()=>{ 

           assert.equal(bookStore.name,'name');
           assert.deepEqual(bookStore.books,[]);
           assert.deepEqual(bookStore._workers,[]);
        })
        it('',()=>{
          
        })
    });

    describe('stockBook',()=>{
        it('test one book',()=>{
            actualResult= bookStore.stockBooks(['title-author']);
            expectedResult=[{title: 'title',author: 'author'}];

            assert.deepEqual(actualResult,expectedResult);
        });
        it('test many books',()=>{
            actualResult= bookStore.stockBooks(['title1-author1','title2-author2']);
            expectedResult=[{title: 'title1',author: 'author1'},{title: 'title2',author: 'author2'}];

            assert.deepEqual(actualResult,expectedResult);
        });
        it('test empty',()=>{
            actualResult=bookStore.stockBooks([]);
            expectedResult=[];

            assert.deepEqual(actualResult,expectedResult);
        });
    })

    describe('hire',()=>{
        it('already exist',()=>{
            bookStore.hire('ivan','position');
            actualResult=()=>bookStore.hire('ivan','position');

            assert.throw(actualResult,expectedResult);
        });
        it('successful',()=>{
            actualResult=bookStore.hire('ivan','position');
            expectedResult=`ivan started work at name as position`;

            assert.equal(actualResult,expectedResult);
        });

        it('workers count',()=>{
            bookStore.hire('ivan','position');
            actualResult=bookStore._workers.length;
           
            expectedResult=1;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('fire',()=>{
        it('doesn\'t exist',()=>{
           actualResult=()=>bookStore.fire('ivan');
           expectedResult=`ivan doesn't work here`;

           assert.throw(actualResult,expectedResult);
        });
        it('empty name',()=>{
            actualResult=()=>bookStore.fire('');
           expectedResult=` doesn't work here`;

           assert.throw(actualResult,expectedResult);
        });
        it('successful',()=>{
            bookStore.hire('ivan','position');
            actualResult=bookStore.fire('ivan');
            expectedResult=`ivan is fired`;

            assert.equal(actualResult,expectedResult);
        });
        it("count",()=>{
            bookStore.hire('ivan','position');
            bookStore.fire('ivan');
            actualResult=bookStore._workers.length;
            expectedResult=0;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('sellBook',()=>{
        it("out of stock",()=>{
            bookStore.hire('ivan','position');
            actualResult=()=>bookStore.sellBook('name','ivan');
            expectedResult='This book is out of stock';

            assert.throw(actualResult,expectedResult); 
        });
        it("no worker",()=>{
            bookStore.stockBooks(['name-author']);
            actualResult=()=>bookStore.sellBook('name','ivan');
            expectedResult=`ivan is not working here`;

            assert.throw(actualResult,expectedResult); 
        });
        it("successful count",()=>{
            bookStore.hire('ivan','position');
            bookStore.stockBooks(['name-author']);
            bookStore.sellBook('name','ivan');
            actualResult=bookStore.books.length;
            expectedResult=0;

            assert.equal(actualResult,expectedResult);
        });
        it("workers sells",()=>{
            bookStore.hire('ivan','position');
            bookStore.stockBooks(['name-author']);
            bookStore.sellBook('name','ivan');
            actualResult=bookStore._workers[0].booksSold;
            expectedResult=1;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('printWorkers',()=>{
        it('print one book sold',()=>{
            bookStore.hire('ivan','position');
            bookStore.stockBooks(['name-author']);
            bookStore.sellBook('name','ivan');

            actualResult=bookStore.printWorkers();
            expectedResult=`Name:ivan Position:position BooksSold:1`;

            assert.equal(actualResult,expectedResult);
        });
        it('print zero books sold',()=>{
            bookStore.hire('ivan','position');
            bookStore.stockBooks(['name-author']);

            actualResult=bookStore.printWorkers();
            expectedResult=`Name:ivan Position:position BooksSold:0`;

            assert.equal(actualResult,expectedResult);
        });
        it('two workers',()=>{
            bookStore.hire('ivan1','position1');
            bookStore.hire('ivan2','position2');
            bookStore.stockBooks(['name-author']);

            actualResult=bookStore.printWorkers();
            expectedResult=`Name:ivan1 Position:position1 BooksSold:0\nName:ivan2 Position:position2 BooksSold:0`

            assert.equal(actualResult,expectedResult);
        });
    })
});


'Name:ivan1 Position:position1 BooksSold:0\nName:ivan2 Position:position2 BooksSold:0'
 'Name:ivan1 Position:position1 BooksSold:0\n            Name:ivan2 Position:position2 BooksSold:0'