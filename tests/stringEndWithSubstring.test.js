const stringEndWithSubstring = require('../stringEndWithSubstring');

describe('stringEndWithSubstring', ()=>{

    it('shlould return true if string ends with given substring', ()=>{
        const result = stringEndWithSubstring('javaScript', 'Script');
        expect(result).toBe(true);
    })
    it('shlould return false if string does not ends with given substring', ()=>{
        const result = stringEndWithSubstring('javaScript', 'script');
        expect(result).toBe(false);
    })


});