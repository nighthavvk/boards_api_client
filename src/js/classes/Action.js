BoardJS.Classes.Action = function(props) {
  this.props = props != null ? props : {};
  if (this.props.container != null) {
    this.$container = this.props.container;
  } else {
    if (this.props.containerID != null) {
      this.containerID = props.containerID;
    } else if (this.defaultContainerID != null) {
      this.containerID = this.defaultContainerID;
    }
    if (this.containerID != null) {
      this.$container = $(this.containerID);
    } else {
      console.log('Container or containerID is unspecified');
    }
  }
  if (this.$container.length) {
    this._initVariables();
    this._initUI();
    this._initPlugins();
    this._initEventListeners();
  }
}

BoardJS.Classes.Action.prototype.defaultContainerID = void 0;

BoardJS.Classes.Action.prototype._initVariables = function() {
  return false;
};

BoardJS.Classes.Action.prototype._initUI = function() {
  return false;
};

BoardJS.Classes.Action.prototype._initPlugins = function() {
  return false;
};

BoardJS.Classes.Action.prototype._initEventListeners = function() {
  return false;
};
