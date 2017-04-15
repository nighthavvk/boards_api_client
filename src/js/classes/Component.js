// Abstract class
BoardJS.Classes.Component = function (props, containerID) {
  this.containerID = (typeof containerID === 'undefined') ? null : containerID;
  this.props = props;

  this.id = this.props.id;
  this.DOMid = "data-" + this.constructor.name.toLowerCase() + "=" + "'" + this.props.id + "'";
  this.state = new BoardJS.Classes.State();
}

BoardJS.Classes.Component.prototype.prepareData = function (data, Type) {
  var preparedData = [];
  data.forEach(function(dataItem, i, arr) { preparedData.push(new Type(dataItem)) });
  return preparedData;
};

BoardJS.Classes.Component.prototype.prepareValue = function (value) {
  return (typeof value === 'undefined' || value == '') ? '-' : value;
};

BoardJS.Classes.Component.prototype.render = function () {
};
