'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function() {
    $('.tab-content').hide();
    $('#projects').show();
    Project.fetchAll();
  };

  projectController.loadByClass = function(){
    $('.tab-content').hide();
    $('#projects').show();
    Project.fetchAll();
    $('#class-filter').on('change', function() {
      $(this.val()) = ctx.params.class
      $('article').hide();
      $(`article[data-class="${ctx.params.class}"]`).fadeIn();
      page.show(`projects/class/${ctx.params.class}`);
    })
  };

  module.projectController = projectController;
})(window);


// projectView.handleFilters = function() {
//   $('#class-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-class="${$(this).val()}"]`).fadeIn();
//       page(`/class/${$(this).val()}`);
//     }
//   });
// };

// function setClass(ctx) {
//
// }
//
//
// $(function() {
//   const f = $('form')[0];
//   page();
//
//   $('body').on('change', 'input', function(){
//     const path = [f.color.value, f.radius.value, f.phrase.value].filter(v => v).join('/')
//     page.show(`/${path}`);
//   })
// })
