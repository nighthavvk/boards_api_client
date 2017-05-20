BoardJS.Components.Ticket = function (props) {
  BoardJS.Classes.Component.apply(this, arguments);

  this.id = props.id;
  this.name = props.name;
  this.description = props.description;
}

BoardJS.Components.Ticket.prototype = Object.create(BoardJS.Classes.Component.prototype);
BoardJS.Components.Ticket.prototype.constructor = BoardJS.Components.Ticket;

BoardJS.Components.Ticket.prototype.render = function () {
  BoardJS.Classes.Component.prototype.render.apply(this, arguments);

  var nameUrl = BoardJS.Api.BaseUrl

  var template = "<div class='ticket js-ticket' " + this.DOMid + "> \
                    <div class='ticket__name-wrapper js-editable-field' \
                      data-placeholder='Set your Ticket name' \
                      data-url=" + BoardJS.Api.TicketsUrl + this.id + " \
                      data-type='PUT'> \
                      <div class='js-text-wrapper'> \
                        <h5 class='ticket__name editable-field__text js-text'>" + this.prepareValue(this.name) + "</h5> \
                      </div> \
                      <div class='js-field-wrapper hidden'> \
                        <input class='editable-field__field js-field' name='ticket[name]' /> \
                      </div> \
                    </div> \
                    <div class='ticket__description-wrapper js-editable-field' \
                      data-placeholder='Set your Ticket description' \
                      data-url=" + BoardJS.Api.TicketsUrl + this.id + " \
                      data-type='PUT'> \
                      <div class='js-text-wrapper'> \
                        <p class='ticket__description editable-field__text js-text'>" + this.prepareValue(this.description) + "</p> \
                      </div> \
                      <div class='js-field-wrapper hidden'> \
                        <textarea class='editable-field__field js-field' name='ticket[description]'></textarea> \
                      </div> \
                    </div> \
                  </div>"
  return template;
};
