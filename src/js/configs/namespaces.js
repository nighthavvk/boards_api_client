var BoardJS = {
  Classes: {},
  Actions: {},
  ApiClients: {},
  Components: {},
  Instances: {},
  Configs: {
    Api: {
      BaseUrl: 'https://boards-api.herokuapp.com/',
      get BoardsUrl () { return this.BaseUrl + 'boards/'; },
      get ListsUrl () { return this.BaseUrl + 'lists/'; },
      get TicketsUrl () { return this.BaseUrl + 'tickets/'; }
    },
    Constants: {}
  },
  Init: {}
}
