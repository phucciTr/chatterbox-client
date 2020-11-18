var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      console.log('roomname = ', data.results[20].roomname);

      let results = data.results;

      let nonDuplicateResults = _unique(results);

      // pass the results into _unique
      // _unique returns us an [] of non-duplicate

      // iterate over results {}
      for (let key in results) {
        let currentMessageObject = results[key];
        let roomName = currentMessageObject.roomname;


        // iterate thru non-duplicate array, add in all elements
        if (roomName !== 'null' || roomName !== 'undefined') {
          RoomsView.$select.append(`<option>${roomName}</option>`);
        }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
