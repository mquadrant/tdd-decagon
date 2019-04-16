const sum = require('./indefiniteSum');

test("Adding real numbers", () =>{
    expect(sum(3,7,22,4,12)).toBe(48);
});