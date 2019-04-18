const concatTwoString = (firstString, secondString) => {
    if(firstString === '' || secondString === '' || typeof firstString !== 'string' || 
    typeof secondString !== 'string'){
        return 'error: not a string';
    }
    return firstString + secondString;
}

module.exports = concatTwoString;