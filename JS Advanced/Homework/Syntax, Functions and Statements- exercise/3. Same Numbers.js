function sameNumbersWithArray(number){
    let digitList=number.toString().split('');
    let allTrue=true;
    let sum=0;
    for(let i=0; i<digitList.length; i++){
       //// if(number[0]!==number[i])
       // {
      //      allTrue=false;
      //      return;
      //  }
      if(allTrue){
      allTrue=digitList[i]===digitList[0];
      }

      sum+= +digitList[i];
    }

    console.log(allTrue);
    console.log(sum);
}


console.log(sameNumbersWithArray(222222));