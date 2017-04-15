BoardJS.Init.InitDOM = function () {

  var renderApp = function (data, xhr) {
    var app = new BoardJS.Components.App(JSON.parse(data), 'app');
    app.render();
    BoardJS.Instances.Events.emit('DOMReady');
  }

  var showError = function (error, xhr) {
    document.getElementsByClassName('js-error-container')[0].className += ' -with-error';
    document.getElementsByClassName('js-error-message')[0].innerHTML = error || 'Error connection refused';
  }

  var boardsApi = new BoardJS.ApiClients.BoardsApi();
  boardsApi.getBoards(renderApp, showError);
}
