BoardJS.Actions.SortableManager = function(props) {
  BoardJS.Classes.Action.apply(this, arguments);
}

BoardJS.Actions.SortableManager.prototype = Object.create(BoardJS.Classes.Action.prototype);
BoardJS.Actions.SortableManager.prototype.constructor = BoardJS.Actions.SortableManager;

BoardJS.Actions.SortableManager.prototype._initVariables = function () {
  this.sortable = this.props.sortable;
  this.parentObjectName = this.props.parentObjectName;
  this.parentObjectClass = this.props.parentObjectClass;
  this.childObjectName = this.props.childObjectName;
  this.childObjectClass = this.props.childObjectClass;
  this.externalOptions = this.props.options;
  this.defaultOptions = {
    tolerance: 'pointer',
    forcePlaceholderSize: true
  };
  this.options = $.extend({}, this.defaultOptions, this.externalOptions);
  this.updateMethod = this.props.updateMethod;
  this.state = new BoardJS.Classes.State();
};

BoardJS.Actions.SortableManager.prototype._initUI = function () {
  this.sortable.sortable(this.options);
};

BoardJS.Actions.SortableManager.prototype._initEventListeners = function () {
  this.sortable.on('sortstop', this.updateObject.bind(this));
};

BoardJS.Actions.SortableManager.prototype.setChildObjectID = function (event, ui) {
  var $object = ui.item.find(this.childObjectClass);
  this.state.update({childID: $object.data('id')});
};

BoardJS.Actions.SortableManager.prototype.setParentObjectID = function (event, ui) {
  var $object = ui.item.closest(this.parentObjectClass);
  this.state.update({parentID: $object.data('id')});
};

BoardJS.Actions.SortableManager.prototype.setObjectPosition = function (event, ui) {
  var $object = ui.item;
  this.state.update({position: $object.index() + 1});
};

BoardJS.Actions.SortableManager.prototype.buildData = function (event, ui) {
  basiClassName = this.childObjectName
  data = {};
  data[basiClassName] = {};
  data[basiClassName]['position'] = this.state.props.position;
  data[basiClassName][this.parentObjectName + '_id'] = this.state.props.parentID;
  data['id'] = this.state.props.childID;
  return data;
};

BoardJS.Actions.SortableManager.prototype.updateObject = function (event, ui) {
  this.setObjectPosition(event, ui);
  this.setChildObjectID(event, ui);
  this.setParentObjectID(event, ui);
  this.updateMethod(this.buildData());
};
