let PaymentPackage=require('./7.Payment Package');
let assert=require('chai').assert;
let expect=require('chai').assert;

describe('PaymentPackage tests',()=>{
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });

    describe('Constructor',()=>{
        it('correct initialization',()=>{
            actualResult=new PaymentPackage('name1',200);

        assert.equal(actualResult.name,'name1');
        assert.equal(actualResult.value,200);
        assert.equal(actualResult.VAT,20);
        assert.equal(actualResult.active,true);
        assert.equal(actualResult.toString(),[
            `Package: name1`,
            `- Value (excl. VAT): 200`,
            `- Value (VAT 20%): 240`
          ].join('\n'));
        });  
    });
    describe('Get set name',()=>{
        it('correct initialization get name',()=>{
            actualResult=new PaymentPackage('name1',200);
            expectedResult='name1';
            assert.equal(actualResult.name,expectedResult);
        });  

        it('empty name',()=>{
            actualResult=()=>new PaymentPackage('',200);

            assert.throw(actualResult,'Name must be a non-empty string');
        });  
        it('not string name',()=>{
            actualResult=()=>new PaymentPackage([],200);

            assert.throw(actualResult,'Name must be a non-empty string');
        }); 
        it('correct name1',()=>{
            actualResult=new PaymentPackage('name',200).name;

            assert.equal(actualResult,'name');
        });  
        it('correct name2',()=>{
            actualResult=new PaymentPackage('name',200);
            actualResult.name='pesho';

            assert.equal(actualResult.name,'pesho');
        });  
    });

    describe('get set value',()=>{
        it('negative value',()=>{
            actualResult=()=>new PaymentPackage('name',-100);

            assert.throw(actualResult,'Value must be a non-negative number');
        })
        it('not number value',()=>{
            actualResult=()=>new PaymentPackage('name',[]);

            assert.throw(actualResult,'Value must be a non-negative number');
        });
        it('correct initialization get value',()=>{
            actualResult=new PaymentPackage('name1',200);
            actualResult= actualResult.value=100;
            expectedResult=100;

            assert.equal(actualResult,expectedResult);
        });  
        it('correct initialization get value',()=>{
            actualResult=new PaymentPackage('name1',200.5);
            expectedResult=200.5;

            assert.equal(actualResult.value,expectedResult);
        });
    });

    describe('get set vat',()=>{
        it('correct1',()=>{
            actualResult=new PaymentPackage('name',20);
            actualResult.VAT=50;
            expectedResult=50;

            assert.equal(actualResult.VAT,expectedResult);
        });
        it('correct2',()=>{
            actualResult=new PaymentPackage('name',20);
            actualResult= actualResult.VAT=50;
            expectedResult=50;

            assert.equal(actualResult,expectedResult);
        });
        it('negative value',()=>{
            actualResult=new PaymentPackage('name',20);
            expectedResult=()=>actualResult.VAT=-100;

            assert.throw(expectedResult,'VAT must be a non-negative number');
        });
        it('not number value',()=>{
            actualResult=new PaymentPackage('name',20);
            expectedResult=()=>actualResult.VAT={};

            assert.throw(expectedResult,'VAT must be a non-negative number');
        });
        it('correct2',()=>{
            actualResult=new PaymentPackage('name',20);
            actualResult= actualResult.VAT=15.5;
            expectedResult=15.5;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('active',()=>{
        it('correct',()=>{
            actualResult=new PaymentPackage('name',50);
            actualResult.active=false;
            expectedResult=false;

            assert.equal(actualResult.active,expectedResult);

            actualResult.active=true;
            assert.equal(actualResult.active,true);
        });
        it('correct',()=>{
            actualResult=new PaymentPackage('name',50);
            actualResult=actualResult.active;
            expectedResult=true;

            assert.equal(actualResult,expectedResult);
        });
        it('not boolean',()=>{
            actualResult=new PaymentPackage('name',50);
            expectedResult=()=>actualResult.active={};

            assert.throw(expectedResult,'Active status must be a boolean');
        })
    });

    describe('toString()',()=>{
        it('toString check1',()=>{
            actualResult=new PaymentPackage('name',50);
            expectedResult=[
                `Package: name`,
                `- Value (excl. VAT): 50`,
                `- Value (VAT 20%): 60`
              ].join('\n');
              
              assert.equal(actualResult.toString(),expectedResult);
        });
        it('toString check2',()=>{
            actualResult=new PaymentPackage('name',100);
            actualResult.name='pesho';
            actualResult.VAT=100;
            actualResult.active=false;
            expectedResult=[
                `Package: pesho (inactive)`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 100%): 200`
              ].join('\n');
              
              assert.equal(actualResult.toString(),expectedResult);
        });
        /* it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.VAT = 0;
            expectedResult='Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500';

            assert.equal(newObj.toString(),expectedResult);
        }); */

        it("test toString", () => {
            let newObj = new PaymentPackage('HR Services', 0);
            newObj.VAT = 0;
            expectedResult='Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0';

            assert.equal(newObj.toString(),expectedResult);
        });
    });
      
});