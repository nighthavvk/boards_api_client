// Abstract class
function Component(props, containerID) {
  this.containerID = (typeof containerID === 'undefined') ? null : containerID;
  this.props = props;
}

Component.prototype.prepareData = function (data, Type) {
  var preparedData = [];
  data.forEach(function(dataItem, i, arr) { preparedData.push(new Type(dataItem)) });
  return preparedData;
};

Component.prototype.prepareValue = function (value) {
  return (typeof value === 'undefined') ? '-' : value;
};

Component.prototype.render = function () {

};
