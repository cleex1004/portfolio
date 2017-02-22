'use strict';

(function(module) {
  const contactController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  contactController.init = function(){
    $('.tab-content').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
