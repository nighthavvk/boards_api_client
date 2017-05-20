BoardJS.Components.Board = function (props) {
  BoardJS.Classes.Component.apply(this, arguments);

  this.name = props.name;
  this.lists = this.prepareData(props.lists, BoardJS.Components.List);
}

BoardJS.Components.Board.prototype = Object.create(BoardJS.Classes.Component.prototype);
BoardJS.Components.Board.prototype.constructor = BoardJS.Components.Board;

BoardJS.Components.Board.prototype.render = function () {
  BoardJS.Classes.Component.prototype.render.apply(this, arguments);

  var listsTemplate = '';
  this.lists.forEach(function(list, i ,arr) {
    listsTemplate += "<li class='board__list-item'> \
                        " + list.render() + " \
                      </li>";
  })
  var template = "<div class='board' " + this.DOMid + "> \
                    <div class='board__title-wrapper js-editable-field' \
                      data-placeholder='Set your Board title' \
                      data-url=" + BoardJS.Api.BoardsUrl + this.id + " \
                      data-type='PUT'> \
                      <span class='js-text-wrapper'> \
                        <h2 class='board__title editable-field__text js-text'>" + this.prepareValue(this.name) + "</h2> \
                      </span> \
                      <span class='js-field-wrapper hidden'> \
                        <input class='editable-field__field js-field' name='board[name]' /> \
                      </span> \
                    </div> \
                    <div class='board__content'> \
                      <ul class='board__list'> \
                        " + listsTemplate + " \
                      </ul> \
                    </div> \
                  </div>";
  return template;
};
