const concat = require('./concatString');

describe('Concatenation when two arguments are strings', ()=>{
    it('When both are strings', () => {
        expect(concat('this','boy')).toEqual('thisboy');
    });
    it('When one or both are character', () => {
        expect(concat('T','girl')).toEqual('Tgirl');
    });
});


test('Concatenation when the first argument is a number',()=>{
    expect(concat(2,'girl')).toContain('error');
});

test('Concatenation when the second argument is a number',()=>{
    expect(concat('girl',2)).toContain('error');
});

test('Concatenation when the first or/and second argument is a function',()=>{
    expect(concat(Math.max(2,5,1,4),'book')).toContain('error');
});

test('Concatenation when the first or/and second argument is "undefined"',()=>{
    expect(concat(undefined,'computer')).toContain('error');
});

test('Concatenation when the first or/and second argument is "null"',()=>{
    expect(concat('computer',null)).toContain('error');
});

test('Concatenation when the first or/and second argument is an "object"',()=>{
    expect(concat({'computer': 'window'}, 'null')).toContain('error');
});

test('Concatenation when the first or/and second argument is an "array"',()=>{
    expect(concat(['two','three'], 'tree')).toContain('error');
});

test('Concatenation when the first or/and second argument is  "boolean"',()=>{
    expect(concat(true, 'tree')).toContain('error');
});

test('Concatenation when the first or/and second argument is an empty string',()=>{
    expect(concat('', '')).toContain('error');
});

test('Concatenation when the first or/and second argument is NaN',()=>{
    expect(concat('yam', NaN)).toContain('error');
});