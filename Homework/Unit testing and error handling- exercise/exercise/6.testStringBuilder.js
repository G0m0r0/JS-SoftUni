let StringBuilder=require('./6.String Builder');
let assert=require('chai').assert;
let expect=require('chai').expect;

describe('StringBuilder',()=>{
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });
    describe('-vrfParam',()=>{
        it('correct1',()=>{
            actualResult=new StringBuilder('').toString();
            expectedResult='';
            assert.equal(actualResult,expectedResult);
        })
        it('correct2',()=>{
            actualResult=new StringBuilder('str');
            actualResult.append('A');
            expectedResult='strA';
            assert.equal(actualResult.toString(),expectedResult);
        })
    })

    describe('constructor',()=>{
        it('undefined input',()=>{
            actualResult=new StringBuilder();
            expectedResult=[];

            assert.deepEqual(actualResult._stringArray,expectedResult);
            assert.isArray(actualResult._stringArray);
            assert.isEmpty(actualResult._stringArray);

            assert.equal(JSON.stringify(actualResult._stringArray),JSON.stringify(expectedResult));;
        });

        it('with param',()=>{
            actualResult=new StringBuilder('str');
            expectedResult=['s','t','r'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('_vrfParam',()=>{
            actualResult=()=>new StringBuilder([]);
            expectedResult=['s','t','r'];

            assert.throw(actualResult,'Argument must be string');
        });
    });
    
    describe('append',()=>{
        it('append',()=>{
            actualResult=new StringBuilder('str');
            actualResult.append('AA');
            expectedResult=['s','t','r','A','A'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('append error',()=>{
            actualResult=()=>new StringBuilder([]);
            expectedResult=['s','t','r','A'];

            assert.throw(actualResult,'Argument must be string');
        });
        it('append error',()=>{
            actualResult=new StringBuilder();
            
            expectedResult=()=>actualResult.append([]);

            assert.throw(expectedResult,'Argument must be string');
        });
        it('append from empty',()=>{
            actualResult=new StringBuilder('');
            actualResult.append('AA');
            expectedResult=['A','A'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
    });
    describe('prepend',()=>{
        it('prepend',()=>{
            actualResult=new StringBuilder('str');
            actualResult.prepend('A');
            expectedResult=['A','s','t','r'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('prepend error',()=>{
            actualResult=()=>new StringBuilder([]);
            //actualResult.append('A');
            expectedResult=['s','t','r','A'];

            assert.throw(actualResult,'Argument must be string');
        });
        it('prepend error2',()=>{
            actualResult=new StringBuilder();
            
            expectedResult=()=>actualResult.prepend([]);

            assert.throw(expectedResult,'Argument must be string');
        });
    });
    describe('InsertAt',()=>{
        it('InsertAt',()=>{
            actualResult=new StringBuilder('str');
            actualResult.insertAt('AA',1);
            expectedResult=['s','A','A','t','r'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('InsertAt',()=>{
            actualResult=new StringBuilder('str');
            actualResult.insertAt('A',4);
            expectedResult=['s','t','r','A'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });

        it('InsertAt error1',()=>{
            actualResult=()=>new StringBuilder([]);
            //actualResult.insertAt('AA',1);
            expectedResult=['s','A','A','t','r'];

            assert.throw(actualResult,'Argument must be string');
        });
        it('InsertAt error2',()=>{
            actualResult=new StringBuilder();
            
            expectedResult=()=>actualResult.insertAt([],1);

            assert.throw(expectedResult,'Argument must be string');
        });
    });

    describe('remove',()=>{
        it('remove1',()=>{
            actualResult=new StringBuilder('str');
            actualResult.remove(1,2);
            expectedResult=['s'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('remove error1',()=>{
            actualResult=()=>new StringBuilder([]);
            //actualResult.remove(1,2);
            expectedResult=['s'];

            assert.throw(actualResult,'Argument must be string');
        });
        it('remove2',()=>{
            actualResult=new StringBuilder('str');   
            actualResult.remove(1,20);
            expectedResult=['s'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
        it('remove3',()=>{
            actualResult=new StringBuilder('strstr');   
            actualResult.remove(1,3);
            expectedResult=['s','t','r'];

            assert.deepEqual(actualResult._stringArray,expectedResult);
        });
    });

    describe('ToString()',()=>{
        it('ToString1',()=>{
            actualResult=new StringBuilder('str');
            expectedResult='str';

            assert.equal(actualResult.toString(),expectedResult);
        });
        it('ToString2',()=>{
            actualResult=new StringBuilder('');
            expectedResult='';

            assert.equal(actualResult.toString(),expectedResult);
        });
        it('ToString3',()=>{
            actualResult=new StringBuilder('str');
            expectedResult='str';

            assert.isOk(actualResult.toString());
        });
    });
    describe('Type of StringBuilder', function () {
     //   it('StringBuilder exist', function () {
     //       expect(StringBuilder).to.exist
     //   });

     ///   it('StringBuilder type', function () {
     //       expect(typeof StringBuilder).to.equal('function');
     //   });

        it('should have the correct function properties', function () {
          //  assert.isFunction(StringBuilder.prototype.append);
          //  assert.isFunction(StringBuilder.prototype.prepend);
         //   assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
           // assert.isFunction(StringBuilder.prototype.toString);
        });

      //  it('full test', function () {
        //    let str = new StringBuilder('hello');
       //     str.append(', there');
       //     str.prepend('User, ');
      //      str.insertAt('woop', 5);
       //     str.remove(6, 3);
      //      expect(str.toString()).to.equal('User,w hello, there');
      //  });
    });
});