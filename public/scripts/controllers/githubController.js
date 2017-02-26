'use strict';

(function(module) {
  const githubController = {};

  githubController.init = function(){
    window.open('https://github.com/cleex1004', '_blank');
    $('.tab-content').hide();
    $('#github').show();

    repos.requestRepos(repos.githubView);

  };

  module.githubController = githubController;
})(window);
