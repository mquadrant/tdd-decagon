function addTwo(firstNumber, secondNumber){
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number' 
    || isNaN(firstNumber) || isNaN(secondNumber)){
        return 'invalid inputs'
    }
    return firstNumber + secondNumber;
}

module.exports = addTwo;