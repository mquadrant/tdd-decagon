const divide = require('./divideTwo');

test('Division when first and the second is a real number',()=>{
    expect(divide(4,2)).toBe(2);
});

test('Division when the second is greater than the first',()=>{
    expect(divide(3,6)).toBeCloseTo(0.5);
});