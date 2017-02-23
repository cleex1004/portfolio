'use strict';

(function(module) {
  const githubController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  githubController.init = function(){
    $('.tab-content').hide();
    $('#github').show();
  };

  module.githubController = githubController;
})(window);
