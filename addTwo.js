function addTwo(firstNumber, secondNumber){
    if(typeof(firstNumber) === 'string'){
        return 'invalid inputs'
    }
    return firstNumber + secondNumber;
}

module.exports = addTwo;