const indefiniteMult = (...valueArgs) => {
    let len = valueArgs.length;
    let result = 1;
    for(let i = 0; i <= len-1; i++){
        if(typeof valueArgs[i] !== 'number')return 'not valid'
        result *= valueArgs[i];
    } 
    return result;
}

module.exports = indefiniteMult;