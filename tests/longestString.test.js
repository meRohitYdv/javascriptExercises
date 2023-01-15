const longestString = require('../longestString');

test('longestString - should return the longest string',()=>{
    const result = longestString(["we", "love", "code", "academy"]);
    expect(result).toBe('academy');
})
