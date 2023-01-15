const changeCase = require('../changeCase');

it('changeCase - should change the case of each character in string', ()=>{
    const result = changeCase('MeRRy hAD a LITTle lAMp');
    expect(result).toBe('mErrY Had A littLE LamP');
})