'use strict';

function Project(opts) {
  this.name = opts.name;
  this.date = opts.date;
  this.description = opts.description;
  this.image = opts.image;
  this.link = opts.link;
}

Project.all = [];

Project.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-template').text());
  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/projectData.json'
    }).done(function(data, message, xhr){
      console.log(xhr.getResponseHeader('ETag'));
      if (xhr.getResponseHeader('ETag') === JSON.parse(localStorage.getItem('ETag'))) {
        console.log('etags match');
        Project.loadAll(JSON.parse(localStorage.getItem('rawData')));
        projectView.initIndexPage();
      } else {
        $.getJSON('data/projectData.json').done(function(rawData){
          Project.loadAll(rawData);
          localStorage.rawData = JSON.stringify(rawData);
          localStorage.ETag = JSON.stringify(xhr.getResponseHeader('ETag'));
          console.log('else1 etags dont match');
          projectView.initIndexPage();
        });
      }
    })
  } else {
    $.getJSON('data/projectData.json').done(function(rawData){
      Project.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
    });
    $.ajax({
      type: 'HEAD',
      url: 'data/projectData.json'
    }).done(function(data, message, xhr){
      localStorage.setItem('ETag', JSON.stringify(xhr.getResponseHeader('ETag')));
      console.log('else2 etag');
      projectView.initIndexPage();
    });
  }
}
