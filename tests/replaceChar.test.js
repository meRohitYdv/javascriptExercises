const replaceChar = require('../replaceChar');

test('replaceChar - should replace each char in string with it\'s successor', ()=>{
    const result = replaceChar('lazyinterns');
    expect(result).toBe('mbazjoufsot');
});