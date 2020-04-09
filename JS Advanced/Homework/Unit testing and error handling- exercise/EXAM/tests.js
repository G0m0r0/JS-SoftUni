let { Repository } = require("./solution.js");
let assert=require('chai').assert;

describe('EXAM', function () {
    let repository;
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        repository=new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        }
        )
        actualResult=null;
        expectedResult=null;
    });

    describe('Constructor',()=>{
        it('correct initialization',()=>{
             actualResult=repository.props;
            expectedResult={
                name: "string",
                age: "number",
                birthday: "object"
            };
            assert.deepEqual(actualResult,expectedResult) 
            //assert.deepEqual(repository,new Map());
        })
        it('',()=>{
          
            assert.equal(actualResult,expectedResult);
        })
    });

    describe('count',()=>{
        it('get',()=>{
            actualResult=repository.count;
            expectedResult=0;

            assert.equal(actualResult,expectedResult);
        });
        it('',()=>{
          
            assert.equal(actualResult,expectedResult);
        })
    })

    describe('add',()=>{
        it('success',()=>{
            actualResult=repository.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            expectedResult=0;
            assert.equal(actualResult,expectedResult);
        });
        it('id',()=>{
            actualResult=repository.nextId;
            expectedResult=0;
   
            assert.equal(actualResult(),expectedResult);
        });

        it('added person nextId',()=>{
            repository.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actualResult=repository.nextId;
            expectedResult=1;
         
            assert.equal(actualResult(),expectedResult);
        });

        it('test size data',()=>{
            repository.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actualResult=repository.count;
            expectedResult=1;

            assert.equal(actualResult,expectedResult);
        });
        it('data set',()=>{
            repository.add({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            actualResult=repository.count;
            expectedResult=1;
            
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('get id',()=>{
        it('throw error',()=>{
           actualResult=()=>repository.getId('psdgo');
           expectedResult=`Entity with id: psdgo does not exist!`;

            assert.throw(actualResult,expectedResult);
        });
        it('with one id 0',()=>{
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
           actualResult= repository.add(entity);
           expectedResult=0;
        
            assert.equal(actualResult,expectedResult);
        });
        it('with two id 1',()=>{
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
           actualResult= repository.add(entity);
           expectedResult=1;
       
            assert.equal(actualResult,expectedResult);
        });
        it('returns person',()=>{
            /*  let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity); // Returns 0
            repository.add(entity); // Returns 1
            actualResult=repository.getId(0);
            expectedResult={ name: 'Pesho', age: 22, birthday: '1998-01-06T22:00:00.000Z' }
         
            assert.equal(actualResult,expectedResult);  */
        });
        it("",()=>{
           
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('update',()=>{
        it("throw error",()=>{
           actualResult=()=>repository.update('ggg','ggg');
           expectedResult=`Entity with id: ggg does not exist!`;

            assert.throw(actualResult,expectedResult);
        });
        it("update size",()=>{
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity); // Returns 0
            actualResult=repository.count;
            expectedResult=1;

          
            assert.equal(actualResult,expectedResult);
        });
        it("",()=>{
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);

            entity = {
                namme: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            actualResult=()=>repository.update(0, entity);
            expectedResult=`Property name is missing from the entity!`;

            assert.throw(actualResult,expectedResult);
        });
        it("",()=>{
       
            assert.equal(actualResult,expectedResult);
        });
    });

    describe('del',()=>{
        it('throw error',()=>{
            actualResult=()=>repository.del('ggg');
            expectedResult=`Entity with id: ggg does not exist!`;
     
            assert.throw(actualResult,expectedResult);
        });
        it('throw error',()=>{
            actualResult=()=>repository.del();
            expectedResult=`Entity with id: undefined does not exist!`;
     
            assert.throw(actualResult,expectedResult);
        });
        it('successful',()=>{
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity); 
            repository.del(0);
            actualResult=repository.count;
            expectedResult=0;
     
            assert.equal(actualResult,expectedResult);
        });
        it('throw error',()=>{
            actualResult=()=>repository.del(-1);
            expectedResult=`Entity with id: -1 does not exist!`;
     
            assert.throw(actualResult,expectedResult);
        });
        it('throw error',()=>{
            actualResult=()=>repository.del(100);
            expectedResult=`Entity with id: 100 does not exist!`;
     
            assert.throw(actualResult,expectedResult);
        });
        it('successful',()=>{
            let entity1 = {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho2",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho3",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity1); 
            repository.add(entity2); 
            repository.add(entity3); 
            repository.del(1);
            actualResult=repository.count;
            expectedResult=2;
     
            assert.equal(actualResult,expectedResult);
        });
        it('successfullll',()=>{
            let entity1 = {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho2",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho3",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity1); 
            repository.add(entity2); 
            repository.add(entity3); 
            repository.del(1);
            repository.del(0);
            repository.del(2);
            actualResult=repository.count;
            expectedResult=0
     
            assert.equal(actualResult,expectedResult);
        });
        it('successful',()=>{
            let entity1 = {
                name: "Pesho1",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho2",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho3",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity1); 
            repository.add(entity2); 
            repository.add(entity3); 
            repository.del(1);
            actualResult=()=>repository.getId(1);
            expectedResult=`Entity with id: 1 does not exist!`;
     
            assert.throw(actualResult,expectedResult);
        });
    });

    describe('validate',()=>{
        it('throw error missing property',()=>{
            entity = {
                nammme: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
           actualResult=()=> repository.add(entity); // Returns 0
            //actualResult=()=> repository.update(1, entity);
            expectedResult=`Property name is missing from the entity!`;

            assert.throw(actualResult,expectedResult);
        });
        it('throw error missing property',()=>{
            entity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: 1991
            };
            repository.add(entity); 
            actualResult=()=>repository.add(anotherEntity);
            //actualResult=()=> repository.update(1, entity);
            expectedResult=`Property birthday is not of correct type!`;

            assert.throw(actualResult,expectedResult);
        });
    })
});

