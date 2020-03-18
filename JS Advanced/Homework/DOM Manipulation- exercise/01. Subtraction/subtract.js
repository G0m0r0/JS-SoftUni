function subtract() {
    const $firstNum=document.getElementById('firstNumber');
    const $secondNum=document.getElementById('secondNumber');

    const result=(+$firstNum.value)-(+$secondNum.value);

    document.getElementById('result').textContent=result;

}