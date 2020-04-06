let SkiResort = require('./solution');
let assert=require('chai').assert;

describe('SkiResort', function () {
    let actualResult;
    let expectedResult;

    beforeEach(()=>{
        actualResult=null;
        expectedResult=null;
    });

    describe('Constructor',()=>{
        it('correct initialization',()=>{
            actualResult=new SkiResort('name1');

            assert.equal(actualResult.name,'name1');
            assert.equal(actualResult.voters,0);
            assert.deepEqual(actualResult.hotels,[])
        })
        it('correct initialization without name',()=>{
            actualResult=new SkiResort('');

            assert.equal(actualResult.name,'');
            assert.equal(actualResult.voters,0);
            assert.deepEqual(actualResult.hotels,[])
        })
    });

    describe('best hotel',()=>{
        it('no voters yet',()=>{
            let resort=new SkiResort('bansko');
            actualResult=resort.bestHotel;
            expectedResult="No votes yet";

            assert.equal(actualResult,expectedResult);
        });
        it('result',()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho1',100);
            resort.build('pesho2',200);

            resort.leave('pesho1',10,10);
            resort.leave('pesho2',10,100);

            actualResult=resort.bestHotel;
            expectedResult=`Best hotel is pesho2 with grade 1000. Available beds: 210`

            assert.equal(actualResult,expectedResult);
        })
    })

    describe('build',()=>{
        it('build error no name',()=>{
            let resort=new SkiResort('bansko');
            expectedResult=()=>resort.build('',5);

            assert.throw(expectedResult,"Invalid input");
        });
        it('build error less beds',()=>{
            let resort=new SkiResort();
            expectedResult=()=>resort.build('hotel',0);

            assert.throw(expectedResult,"Invalid input");
        });

        it('test successful build',()=>{
            let resort=new SkiResort('bansko');

            actualResult=resort.build('name',10);
            expectedResult=`Successfully built new hotel - name`;

            assert.equal(actualResult,expectedResult);
        });

        it('test successful build',()=>{
            let resort=new SkiResort('bansko');            
            resort.build('name',10);

            actualResult=resort.hotels.length;
            expectedResult=1;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('test book',()=>{
        it('invalid input1',()=>{
            let resort=new SkiResort('bansko');
            actualResult=()=>resort.book('',5);
            expectedResult="Invalid input";

            assert.throw(actualResult,expectedResult);
        });
        it('invalid input2',()=>{
            let resort=new SkiResort('bansko');

            actualResult=()=>resort.book('pesho',-2);
            expectedResult="Invalid input";

            assert.throw(actualResult,expectedResult);
        });
        it('invalid there is no free spaces',()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',3);

            actualResult=()=>resort.book('pesho',5);
            expectedResult="There is no free space";

            assert.throw(actualResult,expectedResult);
        });
        it('invalid there is no such hotel',()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',200);

            actualResult=()=>resort.book('peshooo',5);
            expectedResult="There is no such hotel";

            assert.throw(actualResult,expectedResult);
        });
        it("Successfully booked",()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',200);

            actualResult=resort.book('pesho',5);
            expectedResult="Successfully booked";

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('leave',()=>{
        it("Invalid input1",()=>{
            let resort=new SkiResort('bansko');
            actualResult=()=>resort.leave('',10,2);
            expectedResult="Invalid input";

            assert.throw(actualResult,expectedResult);
        });
        it("Invalid input2",()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',10);

            actualResult=()=>resort.leave('pesho',-10,2);
            expectedResult="Invalid input";

            assert.throw(actualResult,expectedResult);
        });
        it("There is no such hotel",()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',10);

            actualResult=()=>resort.leave('peshoooo',2,2);
            expectedResult="There is no such hotel";

            assert.throw(actualResult,expectedResult);
        });
        it("successful leave",()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',10);

            actualResult=resort.leave('pesho',2,2);
            expectedResult=`2 people left pesho hotel`;

            assert.equal(actualResult,expectedResult);
        });
    });

    describe('average grade',()=>{
        it('no voter yet',()=>{
            let resort=new SkiResort('bansko');
            actualResult=resort.averageGrade();
            expectedResult="No votes yet";
            
            assert.equal(actualResult,expectedResult);
        });
        it('average grade',()=>{
            let resort=new SkiResort('bansko');
            resort.build('pesho',100);
            resort.leave('pesho',5,3);

            actualResult=resort.averageGrade();
            expectedResult=`Average grade: 3.00`;
            
            assert.equal(actualResult,expectedResult);
        });
    })
});
