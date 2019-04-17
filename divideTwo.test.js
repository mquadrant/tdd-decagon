const divide = require('./divideTwo');

test('Division when first and the second is a real number',()=>{
    expect(divide(4,2)).toBe(2);
});