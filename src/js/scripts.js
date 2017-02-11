var renderApp = function (data, xhr) {
  var app = new App(JSON.parse(data), 'app');
  app.render();
}

var showError = function (error, xhr) {
  document.getElementsByClassName('js-error-container')[0].className += ' -with-error';
  document.getElementsByClassName('js-error-message')[0].innerHTML = error || 'Error connection refused';
}

var boardsApi = new BoardsApi();
boardsApi.getBoards(renderApp, showError);
