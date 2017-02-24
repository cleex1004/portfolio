'use strict';

(function(module) {
  const githubController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  githubController.init = function(){
    window.open('https://github.com/cleex1004', '_blank');
    $('.tab-content').hide();
    $('#github').show();
    $.ajax({
      url:'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      console.log(data);
      data.forEach(repo => $('#github-info').append(`<li>${repo.name}: ${repo.created_at}</li>`));
      $('#repo-number').text(`Total Number of Repositories: ${data.length}`);
    }, err => {
      console.error(err);
    });
  };

  module.githubController = githubController;
})(window);
