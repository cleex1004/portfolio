'use strict';

(function(module){

  const projectView = {};

  // projectView.populateFilters = function() {
  //   $('project').each(function() {
  //     if (!$(this).hasClass('template')) {
  //       let val = $(this).attr('data-class');
  //       console.log(val);
  //       let optionTag = `<option value="${val}">${val}</option>`;
  //       console.log(optionTag);
  //       if ($(`#class-filter option[value="${val}"]`).length === 0) {
  //         $('#class-filter').append(optionTag);
  //       }
  //     }
  //   });
  // };

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });
    $('#facts .days').text(Project.days());
    $('#facts .number').text(Project.all.length);
    // projectView.populateFilters();
  };

  module.projectView = projectView;
})(window);
