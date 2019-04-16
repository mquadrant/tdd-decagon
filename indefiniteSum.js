let indefiniteSum = (...numberArgs)=>{
    let len = numberArgs.length;
    let Cummulative = 0;
for(let i = 0; i <= len-1; i++){
    Cummulative += numberArgs[i];
}
return Cummulative;
};

module.exports = indefiniteSum;