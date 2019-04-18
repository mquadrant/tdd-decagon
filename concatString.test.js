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