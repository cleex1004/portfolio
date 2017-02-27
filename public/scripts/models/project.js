'use strict';

(function(module){

  function Project(opts) {
    this.name = opts.name;
    this.date = opts.date;
    this.description = opts.description;
    this.class = opts.class;
    this.image = opts.image;
    this.link = opts.link;
    this.days = opts.days;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    let template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort((a,b) => (new Date(a.date)) - (new Date(b.date)));

    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    })
  };

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/projectData.json'
      }).done(function(data, message, xhr){
        if (xhr.getResponseHeader('ETag') === JSON.parse(localStorage.getItem('ETag'))) {
          Project.loadAll(JSON.parse(localStorage.getItem('rawData')));
          projectView.initIndexPage();
        } else {
          $.getJSON('data/projectData.json').done(function(rawData){
            Project.loadAll(rawData);
            localStorage.rawData = JSON.stringify(rawData);
            localStorage.ETag = JSON.stringify(xhr.getResponseHeader('ETag'));
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
        projectView.initIndexPage();
      });
    }
  };

  Project.days = function() {
    return Project.all.map(function(z) {
      return z.days;
    }).reduce(function(acc, current) {
      return acc + current;
    })
  };

  module.Project = Project;
})(window);
