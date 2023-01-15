const largestEvenNumber = require('../largestEvenNumber.js');

describe('largestEvenNumber', ()=>{
    it('should return largest even number if present', ()=>{
        const result = largestEvenNumber([1,2,3,4,5]);
        expect(result).toBe(4);
    });
    it('should return -1 if largest even number not present', ()=>{
        const result = largestEvenNumber([1,3,5,7]);
        expect(result).toBe(-1);
    });

});
