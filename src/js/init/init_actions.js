BoardJS.Init.InitActions = function () {
  // Instances
  var ticketsApi = new BoardJS.ApiClients.TicketsApi()
  // Init componets
  new BoardJS.Actions.SortableManager({
    container: $(document),
    sortable: $('.list__list'),
    parentObjectName: 'list',
    parentObjectClass: '.list',
    childObjectName: 'ticket',
    childObjectClass: '.ticket',
    options: {
      classes: {
        'ui-sortable-helper': '-dragged'
      },
      placeholder: 'list__list-item -placeholder',
      items: '.list__list-item',
      connectWith: '.list__list'
    },
    updateMethod: ticketsApi.update
  });
  new BoardJS.Actions.EditableField({container: $(document)});
}
