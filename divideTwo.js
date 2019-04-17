function divide(firstNumber,secondNumber){
    if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || isNaN(firstNumber) || isNaN(secondNumber))return 'not valid';
    return firstNumber/secondNumber;
}
module.exports = divide;