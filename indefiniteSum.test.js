const sum = require('./indefiniteSum');

test("Adding real numbers", () =>{
    expect(sum(3,7,22,4,12)).toBe(48);
});

test("Adding decimal numbers",() => {
    expect(sum(2.5,4.1,6.6)).toBeCloseTo(13.2);
});

test("One or more of the added number is a string",() =>{
    expect(sum('a',4.4,'b',1.2)).toBe('One or more of the inputs is a string')
});