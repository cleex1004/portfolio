'use strict';

const projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml())
  });
  projectView.handleMainNav();
};

projectView.create = function() {
  let project;
  $('#projects').empty();

  project = new Project({
    name: $('#project-name').val(),
    date: $('#project-date').val(),
    description: $('#project-description').val(),
    image: $('#project-image').val(),
    link: $('#project-link').val(),
  });
  $('#projects').append(project.toHtml());

  $('#export-field').show();
  $('#project-json').val(`${JSON.stringify(project)},`);
};

projectView.initNewProjectPage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#project-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', projectView.create);
};
