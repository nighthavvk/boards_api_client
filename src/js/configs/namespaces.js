var BoardJS = {
  Classes: {},
  Actions: {
    Basic: {}
  },
  ApiClients: {},
  Components: {},
  Instances: {},
  Configs: {},
  Api: {
    BaseUrl: 'http://localhost:3000',
    get BoardsUrl () { return this.BaseUrl + '/boards/'; },
    get ListsUrl () { return this.BaseUrl + '/lists/'; },
    get TicketsUrl () { return this.BaseUrl + '/tickets/'; }
  },
  Routes: {
    BaseUrl: 'http://0.0.0.0:9000',
    BoardsUrl: '/boards/',
    ListsUrl: '/lists/',
    TicketsUrl: '/tickets/'
  },
  Constants: {},
  Pages: {},
  Init: {}
}
