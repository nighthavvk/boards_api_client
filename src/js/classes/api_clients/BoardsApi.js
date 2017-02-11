function BoardsApi() {
  ApiClient.apply(this, arguments);
}

BoardsApi.prototype = Object.create(ApiClient.prototype);
BoardsApi.prototype.constructor = BoardsApi;

BoardsApi.prototype.getBoards = function (callback, error) {
  this.get(Configs.Api.BaseUrl + "boards/1", callback, error);
}
