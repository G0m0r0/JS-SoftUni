function nRotationArray(array)
{
    let numberOfRotations=+array.pop();
    let realRotations=numberOfRotations%array.length;
    
    for (let i = 0; i < realRotations; i++) {
        let lastElement=array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(" "));
}

nRotationArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);