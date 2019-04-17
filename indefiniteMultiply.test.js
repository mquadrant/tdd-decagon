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

 test('when one or more argument multiply is "null"',()=>{
    expect(multiply(null,23,2)).toEqual('not valid');
 });

 test('When one or more argument is "NaN"',()=>{
    expect(multiply(NaN,3,2)).toEqual('not valid');
 });

 test('when one or more argument is "infinity"',()=>{
    expect(multiply(Infinity,2,4)).toEqual(Infinity);
 });

 test('when one or more argument is "string"',()=>{
    expect(multiply('s',2,4)).toEqual('not valid');
 });

 test('when one or more argument is "true or false"',()=>{
    expect(multiply(true,2,4)).toEqual('not valid');
    expect(multiply(3,false,2,4)).toEqual('not valid');
 });