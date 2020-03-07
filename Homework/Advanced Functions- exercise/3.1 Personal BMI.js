function personalBMI(name,age,weight,height){
    const obj={};
    const personalInfo={};
    obj['name']=name;
    personalInfo['age']=age;
    personalInfo['weight']=weight;
    personalInfo['height']=height;

    obj['personalInfo']=personalInfo;
    obj['BMI']=Math.round(weight/((height/100)**2));

    if(obj['BMI']<18.5)
    {
        obj['status']='underweight';
    }else if(obj['BMI']<25)
    {
        obj['status']='normal';
    }else if(obj['BMI']<30)
    {
        obj['status']='overweight';
    }else
    {
        obj['status']='obese';
        obj['recommendation']='admission required';
    }

    return obj;
}

console.log(personalBMI('Peter', 29, 75, 182));