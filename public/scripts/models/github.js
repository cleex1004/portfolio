'use strict';

(function(module){
  const repos= {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.githubView = function() {
    repos.all.forEach(function(repo) {
      $('#github-info').append(`<li>${repo.name}: ${repo.created_at}</li>`);
      $('#repo-number').text(`Total Number of Repositories: ${repos.all.length}`);
    })
  };

  module.repos = repos;
})(window);
