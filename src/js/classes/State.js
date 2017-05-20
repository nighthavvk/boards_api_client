// Abstract class
BoardJS.Classes.State = function (props) {
  this.props = (typeof props === 'undefined') ? {} : props;

  this.callback = function () {
    return false;
  }
}

BoardJS.Classes.State.prototype.onUpdate = function (callback) {
  this.callback = callback;
}

BoardJS.Classes.State.prototype.update = function (nextProps) {
  this.callback($.extend(this.props, nextProps));
}
