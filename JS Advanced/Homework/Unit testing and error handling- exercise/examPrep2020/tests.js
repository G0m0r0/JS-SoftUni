let Parser = require("./solution.js");
let assert = require("chai").assert;

describe('EXAM', function () {
    let actualResult;
    let expectedResult;
    let parser;

    beforeEach(()=>{
        parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        actualResult=null;
        expectedResult=null;
    });

    describe('Constructor',()=>{
        it('correct initialization',()=>{
            actualResult=parser._data;
            expectedResult=JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(actualResult,expectedResult);
        })
        it('initialization',()=>{
          
            assert.deepEqual(parser._log,[]);
        })
    });

    describe('get data',()=>{
        it('test',()=>{
            actualResult=parser.data;
            expectedResult=JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(actualResult,expectedResult);
        });
        it('',()=>{
          
            assert.equal(actualResult,expectedResult);
        })
    })

    describe('print',()=>{
        it('data',()=>{
            actualResult=parser.print();
            expectedResult=`id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR`;
            
            assert.equal(actualResult,expectedResult);
        });
        it('addToLog',()=>{
            parser._addToLog('print');
            actualResult=parser._log;
            expectedResult=[ '0: print' ];
            assert.deepEqual(actualResult,expectedResult);
        });

        it('',()=>{
         
            assert.equal(actualResult,expectedResult);
        });

        it('',()=>{
           
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('addEntries',()=>{
        it('output',()=>{
           actualResult=parser.addEntries("Steven:tech-support Edd:administrator");
           expectedResult="Entries added!"
            assert.equal(actualResult,expectedResult);
        });
        it('data',()=>{
            parser.addEntries("Steven:tech-support Edd:administrator");
            actualResult=parser.data;
            expectedResult=[
                { Nancy: 'architect' },
                { John: 'developer' },
                { Kate: 'HR' },
                { Steven: 'tech-support' },
                { Edd: 'administrator' }
              ];
             assert.deepEqual(actualResult,expectedResult);
        });
        it('print',()=>{
            parser.addEntries("Steven:tech-support Edd:administrator");
            actualResult=parser.print();
            expectedResult=`id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR\n3|Steven|tech-support\n4|Edd|administrator`
            assert.equal(actualResult,expectedResult);
        });
        it('',()=>{
         
            assert.equal(actualResult,expectedResult);
        });
        it("",()=>{
           
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('removeEntry',()=>{
        it("no such entry",()=>{
           actualResult=()=>parser.removeEntry('pesho');
           expectedResult="There is no such entry!";
            assert.throw(actualResult,expectedResult);
        });
        it("remove entry message",()=>{
            actualResult=parser.removeEntry("Kate");
            expectedResult="Removed correctly!";
          
            assert.equal(actualResult,expectedResult);
        });
        it("data",()=>{
            parser.removeEntry("Kate");
            actualResult=parser.data;
            expectedResult=[
                { Nancy: 'architect' },
                { John: 'developer' },
              ]
          
            assert.deepEqual(actualResult,expectedResult);
        });
        it("print",()=>{
            parser.removeEntry("Kate");
            actualResult=parser.print();
            expectedResult="id|name|position\n0|Nancy|architect\n1|John|developer";
       
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('addToLogInitial',()=>{
        it('output',()=>{
            parser._addToLogInitial('remove');
            actualResult=parser._log;
            expectedResult=[];
     
            assert.deepEqual(actualResult,expectedResult);
        });
        it('',()=>{
             actualResult=parser._addToLog("removeEntry");
            expectedResult='Added to log';

            assert.equal(actualResult,expectedResult); 
        });
    })
});