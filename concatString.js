const concatTwoString = (firstString, secondString) => {
    if(typeof firstString !== 'string'){
        return 'error: not a string';
    }
    return firstString + secondString;
}

module.exports = concatTwoString;