module.exports = (str)=>{
    charCodes = [];
    for(let it=0; it<str.length; it++)
        charCodes.push(str.charCodeAt(it));


    // charList = str.split('');
    return charCodes.map(code => {
        return (code==122)? 'a': String.fromCharCode(element+1);
    }).join('');
};