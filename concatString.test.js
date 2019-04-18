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
    expect(concat(Math.max(2,5,1,4),2)).toContain('error');
});