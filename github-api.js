const fetch = require('node-fetch');

function getReposName(userName){
    const endpoint = `http://api.github.com/users/${userName}/repos`;

    return fetch(endpoint)
    .then(res => res.json())
    .then(repositories => {
        let result = repositories.map(repository => {
            return repository.name;
        })
        return result;
    })
}
module.exports = getReposName;