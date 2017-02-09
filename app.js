'use strict';

var projects = [];

function Project(opts) {
  this.name = opts.name;
  this.date = opts.date;
  this.description = opts.description;
  this.image = opts.image;
  this.link = opts.link;
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.project-template').clone();
  $newProject.find('div').removeClass('hidden');
  $newProject.find('h4.project-name').html(this.name);
  $newProject.find('h4.project-date').html(this.date);
  $newProject.find('p').html(this.description);
  $newProject.find('img').attr('src', this.image);
  $newProject.find('a').attr('href', this.link);
  return $newProject;
}

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(a) {
  console.log(a);
  $('#projects').append(a.toHtml());
});
