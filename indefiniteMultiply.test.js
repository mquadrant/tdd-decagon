 const multiply = require('./indefiniteMultiply');

 test('Multiplying all the arguments all together',()=>{
    expect(multiply(3,2,6,2)).toBe(72);
 });