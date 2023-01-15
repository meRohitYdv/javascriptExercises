function changeCase(str){
    let charList = str.split('');
    charList = charList.map(char => {
        return (char == char.toUpperCase())? char.toLowerCase() : char.toUpperCase();
    });
    return charList.join("");
}

module.exports = changeCase;