BoardJS.Classes.Events = function () {
  this.events = {};
}

BoardJS.Classes.Events.prototype.on = function (eventName, fn) {
  this.events[eventName] = this.events[eventName] || []
  this.events[eventName].push(fn)
};

BoardJS.Classes.Events.prototype.off = function (eventName, fn) {
  if (this.events[eventName]) {
    for (var i = 0; i < this.events[eventName].length; i++) {
      if (this.events[eventName][i] === fn) {
        this.events[eventName].splice(i, 1);
        break;
      }
    };
  }
};

BoardJS.Classes.Events.prototype.emit = function (eventName, data) {
  if (this.events[eventName]) {
    this.events[eventName].forEach(function (fn) {
      fn(data);
    });
  }
};

BoardJS.Instances.Events = new BoardJS.Classes.Events()
