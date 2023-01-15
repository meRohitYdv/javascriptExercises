function longestString(stringsList){
    return stringsList.reduce((longestString, string) => {
        return (string.length>longestString.length)?string:longestString;
    });
}

module.exports = longestString;