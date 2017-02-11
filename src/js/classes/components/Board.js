function Board(props) {
  Component.apply(this, arguments);

  this.name = props.name;
  this.lists = this.prepareData(props.lists, List);
}

Board.prototype = Object.create(Component.prototype);
Board.prototype.constructor = Board;

Board.prototype.render = function () {
  Component.prototype.render.apply(this, arguments);

  var listsTemplate = '';
  this.lists.forEach(function(list, i ,arr) {
    listsTemplate += "<li class='board__list-item'> \
                        " + list.render() + " \
                      </li>";
  })
  var template = "<div class='board'> \
                    <h2 class='board__title'>" + this.prepareValue(this.name) + "</h2> \
                    <div class='board__content'> \
                      <ul class='board__list'> \
                        " + listsTemplate + " \
                      </ul> \
                    </div> \
                  </div>";
  return template;
};
