const isNumberWithSameDigits = require('../isNumberWithSameDigits');

describe('isNumberWithSameDigits',()=>{
    it('should return true if number have all the digits same',()=>{
        const result = isNumberWithSameDigits(22);
        expect(result).toBe(true);
    });
    it('should return false if number do not have all the digits same',()=>{
        const result = isNumberWithSameDigits(23);
        expect(result).toBe(false);
    });
});