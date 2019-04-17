const divide = require('./divideTwo');

test('Division when first and the second is a real number',()=>{
    expect(divide(4,2)).toBe(2);
});

test('Division when the second is greater than the first',()=>{
    expect(divide(3,6)).toBeCloseTo(0.5);
});

test('Division when either the first or the second number is a decimal',()=>{
    expect(divide(3.7,1.2)).toBeCloseTo(3.08);
});

test('Division when either the first or the second number is an "object"',()=>{
    expect(divide({},1.2)).toEqual('not valid');
});

test('Division when either the first or the second number is an "array"',()=>{
    expect(divide(3,[])).toEqual('not valid');
});