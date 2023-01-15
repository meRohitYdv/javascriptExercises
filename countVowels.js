module.exports = (str)=>{
    charList = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;
    charList.forEach(char => {
        if(vowels.includes(char))
            vowelCount++;
    });

    return vowelCount;
};