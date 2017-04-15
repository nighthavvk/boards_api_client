BoardJS.ApiClients.BoardsApi = function () {
  BoardJS.Classes.ApiClient.apply(this, arguments);
}

BoardJS.ApiClients.BoardsApi.prototype = Object.create(BoardJS.Classes.ApiClient.prototype);
BoardJS.ApiClients.BoardsApi.prototype.constructor = BoardJS.ApiClients.BoardsApi;

BoardJS.ApiClients.BoardsApi.prototype.getBoards = function (callback, error) {
  this.get(BoardJS.Configs.Api.BaseUrl + 'boards/1', callback, error);
}
