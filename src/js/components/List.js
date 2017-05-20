BoardJS.Components.List = function (props) {
  BoardJS.Classes.Component.apply(this, arguments);

  this.name = props.name;
  this.tickets = this.prepareData(props.tickets, BoardJS.Components.Ticket);
}

BoardJS.Components.List.prototype = Object.create(BoardJS.Classes.Component.prototype);
BoardJS.Components.List.prototype.constructor = BoardJS.Components.List;

BoardJS.Components.List.prototype.render = function () {
  BoardJS.Classes.Component.prototype.render.apply(this, arguments);

  var ticketsTemplate = '';
  this.tickets.forEach(function(ticket, i ,arr) {
    ticketsTemplate += "<li class='list__list-item js-draggable'> \
                          " + ticket.render() + " \
                        </li>";
  })
  var template = "<div class='list' " + this.DOMid + "> \
                    <div class='list__title-wrapper js-editable-field' \
                      data-placeholder='Set your List title' \
                      data-url=" + BoardJS.Api.ListsUrl + this.id + " \
                      data-type='PUT'> \
                      <div class='js-text-wrapper'> \
                        <h3 class='list__title editable-field__text js-text'>" + this.prepareValue(this.name) + "</h3> \
                      </div> \
                      <div class='js-field-wrapper hidden'> \
                        <input class='editable-field__field js-field' name='list[name]' /> \
                      </div> \
                    </div> \
                    <ul class='list__list js-droppable'> \
                      " + ticketsTemplate + " \
                    </ul> \
                  </div>";
  return template;
};
