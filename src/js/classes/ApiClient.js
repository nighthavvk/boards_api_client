// Abstract class
BoardJS.Classes.ApiClient = function () {
}

BoardJS.Classes.ApiClient.prototype.request = function (method, url, data, done, fail) {
  ajaxData = {
    method: method,
    url: url,
    data: data !== undefined || data !== null ? data : null
  };
  $.ajax(ajaxData)
  .done(function(data, textStatus, jqXHR) {
    if (typeof done === 'function' && done !== undefined) {
      done(data, textStatus, jqXHR)
    }
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    if (typeof fail === 'function' && fail !== undefined) {
      fail(jqXHR, textStatus, errorThrown)
    }
  });
}

BoardJS.Classes.ApiClient.prototype.get = function (url, data, done, fail) {
  this.request('get', url, data, done, fail);
}

BoardJS.Classes.ApiClient.prototype.put = function (url, data, done, fail) {
  this.request('put', url, data, done, fail);
}
