function largestEvenNumber(array){
    let largest = -1;
    for(let i=0; i<array.length; i++)
        if(array[i]%2===0 && array[i]>largest)
            largest = array[i];
    return largest;
}

module.exports = largestEvenNumber;