
const usersRepos = {
    'mquadrant': {name: ['Social-media','Big-cart']},
    'segzy': {name: ['game-dice','affiliate-giant']},
    'empt': {name: []},
    'mogbeyi-david': {name: ['Social-media','Big-cart','code-hack']},
  };

  function getReposName(userName){

    return new Promise ((resolve,reject) => {
      if(usersRepos[userName]){
        resolve(usersRepos[userName].name);
      }else{
        resolve('error');
      }
    });

  }
  module.exports = getReposName;