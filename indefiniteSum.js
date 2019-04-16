let indefiniteSum = (...numberArgs) => {
    let len = numberArgs.length;
    let Cummulative = 0;
for(let i = 0; i <= len-1; i++){
    if(typeof(numberArgs[i]) == 'string'){
        return 'One or more of the inputs is a string';
    }
    Cummulative += numberArgs[i];
}
return Cummulative;
};

module.exports = indefiniteSum;