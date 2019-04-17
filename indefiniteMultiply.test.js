 const multiply = require('./indefiniteMultiply');

 test('Multiplying all real number arguments all together',()=>{
    expect(multiply(3,2,6,2)).toBe(72);
 });

 test('Multiplication when one or more argument is decimal',()=>{
    expect(multiply(2.1,1.3,5,7,3,2)).toBeCloseTo(573.3);
 });

 test('Multiplication when one or more argument is an object',()=>{
    expect(multiply(4,{},5,{})).toEqual('not valid');
 });

 test('Multiplication when one or more argument is an array',()=>{
    expect(multiply([],2,5)).toEqual('not valid');
 });

 test('When one or more argument is "undefined"',()=>{
    expect(multiply(3,4,undefined,29)).toEqual('not valid');
 });