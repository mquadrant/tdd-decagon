const diff = require('./difference');

test('When the first number is greater than the second number', () => {
    expect(diff(6,4)).toBe(1);
    expect(diff(34,21)).toBe(13);
});