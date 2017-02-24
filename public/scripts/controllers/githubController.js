'use strict';

(function(module) {
  const githubController = {};

  githubController.init = function(){
    window.open('https://github.com/cleex1004', '_blank');
    $('.tab-content').hide();
    $('#github').show();
    $.get('/github/user/repos').then(data => {
      data.forEach(repo => $('#github-info').append(`<li>${repo.name}: ${repo.created_at}</li>`));
      $('#repo-number').text(`Total Number of Repositories: ${data.length}`);
    }, err => {
      console.error(err);
    });
  };

  module.githubController = githubController;
})(window);
