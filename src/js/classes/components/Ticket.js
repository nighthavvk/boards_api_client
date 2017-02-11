function Ticket(props) {
  Component.apply(this, arguments);

  this.id = props.id;
  this.name = props.name;
  this.description = props.description;
}

Ticket.prototype = Object.create(Component.prototype);
Ticket.prototype.constructor = Ticket;

Ticket.prototype.render = function () {
  Component.prototype.render.apply(this, arguments);

  var template = "<div class='ticket'> \
                    <h5 class='ticket__name'> \
                      " + this.prepareValue(this.name) + " \
                    </h5> \
                    <p class='ticket__description'> \
                      " + this.prepareValue(this.description) + " \
                    </p> \
                  </div>"
  return template;
};
