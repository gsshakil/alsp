import ToolbarController, {zCount} from '../toolbar/toolbar.controller';

class HistoryController {
  constructor() {
    $( "#drophistory" ).sortable({
      cursor: "move",
      stop: function( event, ui ) {
          console.log("Moved");
      },
      classes: {
        "ui-sortable": "highlight"
      }
    });
    $( "#drophistory" ).disableSelection();
  }
}

export default HistoryController;
