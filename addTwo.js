function addTwo(firstNumber, secondNumber){
    if(typeof(firstNumber) === 'string' || typeof(secondNumber) === 'string' ){
        return 'invalid inputs'
    }
    return firstNumber + secondNumber;
}

module.exports = addTwo;