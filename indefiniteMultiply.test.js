 const multiply = require('./indefiniteMultiply');

 test('Multiplying all the arguments all together',()=>{
    expect(multiply(3,2,6,2)).toBe(72);
 });

 test('Multiplication when one or more argument is decimal',()=>{
    expect(multiply(2.1,1.3,5,7,3,2)).toBeCloseTo(573.3);
 });