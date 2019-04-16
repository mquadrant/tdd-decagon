let indefiniteSum = (...numberArgs) => {
    let len = numberArgs.length;
    let Cummulative = 0;
for(let i = 0; i <= len-1; i++){
    if(typeof(numberArgs[i]) !== 'number'){
        return 'invalid inputs';
    }
    Cummulative += numberArgs[i];
}
return Cummulative;
};

module.exports = indefiniteSum;