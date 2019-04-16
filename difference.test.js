const diff = require('./difference');

test('When the first number is greater than the second number', () => {
    expect(diff(6,4)).toBe(2);
    expect(diff(34,21)).toBe(13);
});

test("when the second number is greater", () => {
    expect(diff(4,6)).toBe(2);
    expect(diff(21,34)).toBe(13);
});

test('when one or two inputs is a "string"', () => {
    expect(diff('a',2)).toBe("not valid");
    expect(diff('c','a')).toBe('not valid');
});

test('when both are both negative number', ()=>{
    expect(diff(-3,-5)).toBe(2);
});

test('when one of the number is negative number', ()=>{
    expect(diff(3,-5)).toBe(8);
});

test('when "NaN" is passed',()=>{
    expect(diff(NaN,3)).toBe('not valid');
});

test('When a decimal number is passed',()=>{
    expect(diff(2.11,8)).toBeCloseTo(5.89);
});

test('When an object is passed',()=>{
    expect(diff({},{})).toEqual('not valid');
});

test('When "undefined" is passed',()=>{
    expect(diff(undefined,8)).toEqual('not valid');
});

test('When "true or passed" is passed',()=>{
    expect(diff(true,false)).toEqual('not valid');
    expect(diff(true,false)).toEqual('not valid');
});