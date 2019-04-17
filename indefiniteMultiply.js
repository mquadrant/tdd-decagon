const indefiniteMult = (...valueArgs) => {
    let len = valueArgs.length;
    let result = valueArgs[0];
    for(let i = 1; i <= len-1; i++){
        result *= valueArgs[i];
    } 
    return result;
}

module.exports = indefiniteMult;