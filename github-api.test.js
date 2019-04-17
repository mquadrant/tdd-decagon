const getRepos = require('./github-api');

describe('Testing the getReposName function', () => {

    it('should return the users repository name', async () =>{
            expect(await getRepos('mogbeyi-david')).toContain('code-hack')
        });
        
});