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
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projectData.forEach(function(projObject) {
  projectsArray.push(new Project(projObject));
});

projectsArray.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
