'use strict';

page('/', homeController.init);
page('/projects', projectController.init);
page('/projects/class/:class', projectController.loadByClass);
page('/about', aboutController.init);
page('/contact', contactController.init);
page('/github', githubController.init);

page();
