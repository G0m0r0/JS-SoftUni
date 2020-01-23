function printArrayByGivenDelimeter(array)
{
    let delimiter=array.pop();
    console.log(array.join(delimiter));
}

printArrayByGivenDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '=']);