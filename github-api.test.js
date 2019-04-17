const getRepos = require('./github-api');

describe('Testing the getReposName function',()=>{
    it('should return the users repository name',()=>{
        expect(getRepos('ded')).toContain('bonzo');
    });

    it('should return the users repository name',()=>{
        expect(getRepos('mogbeyi-david')).toContain('code-hack');
    });
});