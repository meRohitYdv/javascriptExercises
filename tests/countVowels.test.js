const countVowels = require('../countVowels');

test('countVowels - should return number of vowels', ()=>{
    const result = countVowels('codeacademy');
    expect(result).toBe(5);
})