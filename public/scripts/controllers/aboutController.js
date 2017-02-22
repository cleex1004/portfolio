'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
    $('.tab-content').hide();
    $('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
