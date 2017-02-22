'use strict';

(function(module) {
  const homeController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  homeController.init = function(){
    $('.tab-content').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(window);
