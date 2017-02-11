function List(props) {
  Component.apply(this, arguments);

  this.name = props.name;
  this.tickets = this.prepareData(props.tickets, Ticket);
}

List.prototype = Object.create(Component.prototype);
List.prototype.constructor = List;

List.prototype.render = function () {
  Component.prototype.render.apply(this, arguments);

  var ticketsTemplate = '';
  this.tickets.forEach(function(ticket, i ,arr) {
    ticketsTemplate += "<li class='list__list-item js-draggable'> \
                          " + ticket.render() + " \
                        </li>";
  })
  var template = "<div class='list'> \
                    <h3 class='list__title'>" + this.prepareValue(this.name) + "</h3> \
                    <ul class='list__list js-droppable'> \
                      " + ticketsTemplate + " \
                    </ul> \
                  </div>";
  return template;
};
