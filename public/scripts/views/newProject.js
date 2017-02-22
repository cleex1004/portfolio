'use strict';

(function(module){
  const newProject = {}

  newProject.create = function() {

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

  newProject.initNewProjectPage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#project-json').on('focus', function(){
      this.select();
    });
    $('#new-form').on('change', 'input, textarea', newProject.create);
  };

  module.newProject = newProject;
})(window);
