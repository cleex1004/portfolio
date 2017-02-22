'use strict';

(function(module) {
  const projectController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  projectController.init = function(){
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
