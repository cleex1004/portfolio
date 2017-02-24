'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function(){
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
