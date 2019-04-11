const addTwo = require('./addTwo');

test('Adding number to number (add 2 + 3 to be 5)',() =>{

    expect(addTwo(2, 3)).toBe(5);
});

test("Adding string to number (add 'a' + 3 to be invalid)",() =>{

    expect(addTwo('a', 3)).toEqual("invalid inputs");
});

test("Adding number to string (add 3 + 'a' to be invalid)",() =>{

    expect(addTwo(3,'a')).toEqual("invalid inputs");
});

test("Adding two decimal numbers (add 1.2 + 1.4 to be invalid)",() =>{

    expect(addTwo(1.2,1.4)).toBeCloseTo(2.6);
});

test("Either first number or second number is null (add null + 1.4 to be invalid)",() =>{

    expect(addTwo(null,1.4)).toEqual("invalid inputs");
});

test("Either first number or second number is undefined (add undefined + 5 to be invalid)",() =>{

    expect(addTwo(undefined,5)).toEqual("invalid inputs");
});

test("Either first number or second number is empty (add '' + '' to be invalid)",() =>{

    expect(addTwo('','')).toEqual("invalid inputs");
});

test("Either first number or second number is NaN (add NaN + 3 to be invalid)",() =>{

    expect(addTwo(NaN, 5)).toEqual("invalid inputs");
});