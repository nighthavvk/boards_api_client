BoardJS.Init.InitDOM = function () {
  $.routes.add(BoardJS.Routes.BoardsUrl + '{id:int}/', function () { BoardJS.Pages.BoardsShow(this.id) });
}
