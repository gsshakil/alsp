import ToolbarController, {zCount} from '../toolbar/toolbar.controller';

class HistoryController {
  constructor() {
    this.name = 'history';
    const count = 0;
    $( "#drophistory" ).sortable({
      cursor: "move",
      over: function( event, ui ) {

      },
      classes: {
        "ui-sortable": "highlight"
      }
    });
    $( "#drophistory" ).disableSelection();
  }
}

export default HistoryController;
