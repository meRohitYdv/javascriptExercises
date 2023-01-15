const concatTwo = require('../concatTwo');

test('concatTwo - should concat two strings except first character of each string', ()=>{
    const result = concatTwo(["code", "academy"]);
    expect(result).toBe('odecademy');
});