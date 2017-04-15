BoardJS.Components.App = function () {
  BoardJS.Classes.Component.apply(this, arguments);
}

BoardJS.Components.App.prototype = Object.create(BoardJS.Classes.Component.prototype);
BoardJS.Components.App.prototype.constructor = BoardJS.Components.App;

BoardJS.Components.App.prototype.render = function () {
  BoardJS.Classes.Component.prototype.render.apply(this, arguments);
  var board = new BoardJS.Components.Board(this.props);
  document.getElementById(this.containerID).innerHTML = board.render();
};
