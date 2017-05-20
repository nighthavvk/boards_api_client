BoardJS.ApiClients.TicketsApi = function () {
  BoardJS.Classes.ApiClient.apply(this, arguments);
}

BoardJS.ApiClients.TicketsApi.prototype = Object.create(BoardJS.Classes.ApiClient.prototype);
BoardJS.ApiClients.TicketsApi.prototype.constructor = BoardJS.ApiClients.TicketsApi;

BoardJS.ApiClients.TicketsApi.prototype.update = (function (data, done, fail) {
  this.put(BoardJS.Api.TicketsUrl + data.id, data, done, fail);
}).bind(BoardJS.ApiClients.TicketsApi.prototype)
