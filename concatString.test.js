const concat = require('./concatString');

describe('Concatenation when two arguments are strings', ()=>{
    it('When both are strings', () => {
        expect(concat('this','boy')).toContain('thisboy')
    });
    it('When one or both are character', () => {
        expect(concat('T','girl')).toContain('Tgirl')
    });
});
