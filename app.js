'use strict';

var projectsArray = [];

function Project(opts) {
  this.name = opts.name;
  this.date = opts.date;
  this.description = opts.description;
  this.image = opts.image;
  this.link = opts.link;
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.project-template').clone();
  $newProject.removeClass('project-template');
  $newProject.find('h4.project-name').html(this.name);
  $newProject.find('h4.project-date').html(this.date);
  $newProject.find('img').attr('src', this.image);
  $newProject.find('p').html(this.description);
  $newProject.find('a').attr('href', this.link);
  return $newProject;
};

projectData.forEach(function(projObject) {
  projectsArray.push(new Project(projObject));
});

projectsArray.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
