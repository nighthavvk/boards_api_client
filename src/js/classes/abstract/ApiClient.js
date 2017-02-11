// Abstract class
function ApiClient() {
  this.xhr = (window.XMLHttpRequest) ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
}

ApiClient.prototype.request = function (method, url, callback, error) {
  this.xhr.onreadystatechange = function () {
    // this === this.xhr
    if (this.readyState === 4) {
      if (this.status === 200) {
        if (typeof callback === 'function') {
          callback(this.responseText, this);
        };
      } else {
        if (typeof error === 'function') {
          error(this.statusText, this);
        };
      }
    };
  };
  this.xhr.open(method, url, true);
  this.xhr.send();
}

ApiClient.prototype.get = function (url, callback, error) {
  this.request('get', url, callback, error);
}
