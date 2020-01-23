function nRotationArray(array)
{
    let numberOfRotations=+array.pop();
    
    for (let i = 0; i < numberOfRotations; i++) {
        let lastElement=array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(" "));
}

nRotationArray(['5']);