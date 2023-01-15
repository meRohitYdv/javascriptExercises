function isNumberWithSameDigits(number){
    number = number.toString();
    for(let it=1; it<number.length; it++)
        if(number[it]!==number[0])
            return false;
    return true;
}

module.exports = isNumberWithSameDigits;