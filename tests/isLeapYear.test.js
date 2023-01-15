const isLeapYear = require('../isLeapYear');

describe('isLeapYear',()=>{
test('should return true if year is a leap year', ()=>{
    const result = isLeapYear(2000);
    expect(result).toBe(true);
});

test('should return false if year is not a leap year', ()=>{
    const result = isLeapYear(2001);
    expect(result).toBe(false);
});
});