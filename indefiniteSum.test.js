const sum = require('./indefiniteSum');

test("Adding real numbers", () =>{
    expect(sum(3,7,22,4,12)).toBe(48);
});

test("Adding decimal numbers",() => {
    expect(sum(2.5,4.1,6.6)).toBeCloseTo(13.2);
});