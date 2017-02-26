'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function(){
    $('.tab-content').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
