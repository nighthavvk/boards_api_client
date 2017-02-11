function App() {
  Component.apply(this, arguments);
}

App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;

App.prototype.render = function () {
  Component.prototype.render.apply(this, arguments);
  var board = new Board(this.props);
  document.getElementById(this.containerID).innerHTML = board.render();
};
