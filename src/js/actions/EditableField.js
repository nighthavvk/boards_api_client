BoardJS.Actions.EditableField = function (props) {
  BoardJS.Classes.Action.apply(this, arguments);
}

BoardJS.Actions.EditableField.prototype = Object.create(BoardJS.Classes.Action.prototype);
BoardJS.Actions.EditableField.prototype.constructor = BoardJS.Actions.EditableField;

BoardJS.Actions.EditableField.prototype._initVariables = function () {
  this.basicClass = '.js-editable-field';
  this.currData = {};
  this.prevData = {};
  this.state = void 0;
  return this.states = {
    inside: 'inside',
    insideAnother: 'insideAnother',
    outside: 'outside'
  };
};

BoardJS.Actions.EditableField.prototype._initEventListeners = function () {
  $(document).on ('click', (function (_this) {
    return function (e) {
      return _this.onClick(e);
    };
  })(this));
  return $(document).on ('click', this.basicClass, (function (_this) {
    return function (e) {
      e.stopImmediatePropagation ();
      return _this.onClick(e);
    };
  })(this));
};

BoardJS.Actions.EditableField.prototype.updateCurrData = function (newData) {
  this.updatePrevData(this.currData);
  return $.extend(this.currData, newData);
};

BoardJS.Actions.EditableField.prototype.updatePrevData = function (newData) {
  return $.extend(this.prevData, newData);
};

BoardJS.Actions.EditableField.prototype.updateState = function () {
  if (this.inputClicked() && !this.sameInputClicked() && this.prevTargetWasInput()) {
    return this.state = this.states.insideAnother;
  } else if (this.inputClicked()) {
    return this.state = this.states.inside;
  } else if (!this.inputClicked()) {
    return this.state = this.states.outside;
  }
};

BoardJS.Actions.EditableField.prototype.getNewData = function ($eTarget) {
  var newData;
  newData = {};
  newData.$eTarget = $eTarget;
  newData.$container = newData.$eTarget.closest(this.basicClass);
  newData.url = newData.$container.data('url');
  newData.type = newData.$container.data('type');
  newData.placeholder = newData.$container.data('placeholder');
  newData.$textWrapper = newData.$container.find('.js-text-wrapper');
  newData.$text = newData.$container.find('.js-text');
  newData.$fieldWrapper = newData.$container.find('.js-field-wrapper');
  newData.$field = newData.$container.find('.js-field');
  return newData;
};

BoardJS.Actions.EditableField.prototype.onClick = function (e) {
  var $eTarget, newData;
  $eTarget = $(e.target);
  newData = this.getNewData($eTarget);
  this.updateCurrData(newData);
  this.updateState();
  return this.handleClick();
};

BoardJS.Actions.EditableField.prototype.onEnter = function (e, data) {
  if (e.keyCode === 13) {
    e.preventDefault();
    return this.fieldHide(data);
  }
};

BoardJS.Actions.EditableField.prototype.handleClick = function () {
  if (this.state === this.states.inside) {
    return this.fieldShow(this.currData);
  } else if (this.state === this.states.insideAnother) {
    this.fieldHide(this.prevData);
    return this.fieldShow(this.currData);
  } else if (this.state === this.states.outside && this.prevTargetWasInput()) {
    return this.fieldHide(this.prevData);
  }
};

BoardJS.Actions.EditableField.prototype.handleAjaxRequest = function (data, url, type) {
  if ((data != null) && (url != null) && (type != null)) {
    return $.ajax({
      data: data,
      url: url,
      type: type
    });
  }
};

BoardJS.Actions.EditableField.prototype.inputClicked = function () {
  return this.currData.$container.length;
};

BoardJS.Actions.EditableField.prototype.sameInputClicked = function () {
  return this.currData.$container.is(this.prevData.$container);
};

BoardJS.Actions.EditableField.prototype.prevTargetWasInput = function () {
  return (this.prevData.$container != null) && this.prevData.$container.length;
};

BoardJS.Actions.EditableField.prototype.fieldShow = function (data) {
  if (data.$textWrapper.hasClass('hidden')) {
    return;
  }
  if (data.$field.outerWidth() < data.$textWrapper.outerWidth()) {
    data.$field.width(data.$textWrapper.width());
  }
  data.$textWrapper.addClass('hidden');
  data.$fieldWrapper.removeClass('hidden');
  data.$field.focus();
  if (data.$text.text() === data.placeholder) {
    data.$field.val('');
  } else {
    data.$field.val(data.$text.text());
  }
  return data.$field.on ('keydown', (function (_this) {
    return function (e) {
      return _this.onEnter(e, data);
    };
  })(this));
};

BoardJS.Actions.EditableField.prototype.fieldHide = function (data) {
  var ajaxData;
  if (data.$fieldWrapper.hasClass('hidden')) {
    return;
  }
  data.$fieldWrapper.addClass('hidden');
  data.$textWrapper.removeClass('hidden');
  if (data.$field.val()) {
    data.$text.text(data.$field.val());
  } else {
    data.$text.text(data.placeholder);
  }
  ajaxData = {};
  ajaxData[data.$field.attr('name')] = data.$field.val();
  this.handleAjaxRequest(ajaxData, data.url, data.type);
  return data.$field.off('keydown', (function (_this) {
    return function (e) {
      return _this.onEnter(e, data);
    };
  })(this));
};
