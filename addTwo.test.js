const add = require('./addTwo');

test('adds 2 + 3 to be 5',() =>{

    expect(addTwo(2,3)).toBe(5);
});