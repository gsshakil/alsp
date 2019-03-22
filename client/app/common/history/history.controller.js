class HistoryController {
  constructor() {
    this.name = 'history';
    $( "#drophistory" ).sortable({

    });
    $( "#drophistory" ).disableSelection();
  }
}

export default HistoryController;
