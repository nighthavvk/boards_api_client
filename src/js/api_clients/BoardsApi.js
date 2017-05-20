BoardJS.ApiClients.BoardsApi = function () {
  BoardJS.Classes.ApiClient.apply(this, arguments);
}

BoardJS.ApiClients.BoardsApi.prototype = Object.create(BoardJS.Classes.ApiClient.prototype);
BoardJS.ApiClients.BoardsApi.prototype.constructor = BoardJS.ApiClients.BoardsApi;

BoardJS.ApiClients.BoardsApi.prototype.getBoardsIndex = (function (done, fail) {
  this.get(BoardJS.Api.BoardsUrl, null, done, fail);
}).bind(BoardJS.ApiClients.BoardsApi.prototype)

BoardJS.ApiClients.BoardsApi.prototype.getBoardsShow = (function (id, done, fail) {
  this.get(BoardJS.Api.BoardsUrl + id, null, done, fail);
}).bind(BoardJS.ApiClients.BoardsApi.prototype)
