'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function(){
    $('.tab-content').hide();
    $('#projects').show();
    Project.fetchAll();
  };

  module.projectController = projectController;
})(window);
