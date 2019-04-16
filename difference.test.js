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
})