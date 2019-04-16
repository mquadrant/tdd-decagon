const diff = (firstNumber, secondNumber) => {

    if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || isNaN(firstNumber) || isNaN(secondNumber)){
        return 'not valid';
    }
    return Math.abs(firstNumber-secondNumber);
}

module.exports = diff;