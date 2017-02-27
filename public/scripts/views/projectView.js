'use strict';

(function(module){

  const projectView = {};

  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        let val = $(this).attr('data-class');
        let optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#class-filter option[value="${val}"]`).length === 0) {
          $('#class-filter').append(optionTag);
        }
      }
    });
  };

  // projectView.handleFilters = function() {
  //   $('#class-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('article').hide();
  //       $(`article[data-class="${$(this).val()}"]`).fadeIn();
  //       page(`/class/${$(this).val()}`);
  //     }
  //   });
  // };

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });
    $('#facts .days').text(Project.days());
    $('#facts .number').text(Project.all.length);
    projectView.populateFilters();
    //projectView.handleFilters();
  };

  module.projectView = projectView;
})(window);
