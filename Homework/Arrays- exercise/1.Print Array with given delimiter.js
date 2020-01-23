function printArrayByGivenDelimeter(array)
{
    let delimeter=array.pop();
    console.log(array.join(delimeter));
}

printArrayByGivenDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '=']);