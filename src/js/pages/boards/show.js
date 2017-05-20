BoardJS.Pages.BoardsShow = function (id) {
  var renderApp = function (data, textStatus, jqXHR) {
    var app = new BoardJS.Components.App(data, 'app');
    app.render();
    BoardJS.Instances.Events.emit('DOMReady');
  };

  var showError = function (jqXHR, textStatus, errorThrown) {
    $('.js-error-container').addClass('-with-error');
    $('.js-error-message').html(errorThrown || 'Error connection refused');
  };

  var boardsApi = new BoardJS.ApiClients.BoardsApi();
  boardsApi.getBoardsShow(id, renderApp, showError);
}
