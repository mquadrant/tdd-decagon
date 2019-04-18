jest.mock('./github-api');
const getRepos = require('./github-api');

describe('Testing the getReposName function', () => {

    it('should return the users repository name', async () => {
        expect(await getRepos('mogbeyi-david')).toContain('code-hack')
    });

    it('should return the users repository name', async () => {
        expect(await getRepos('segzy')).toContain('affiliate-giant')
    });

    it('When the repository does not exist', async () => {
        expect(await getRepos('dehg4')).toContain('error')
    });

    it('When the repository is empty', async () => {
        expect(await getRepos('empt')).toEqual([]);
    });
});