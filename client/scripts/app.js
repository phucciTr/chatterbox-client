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
      // console.log(data);

      let results = data.results;

      // create an non duplicate object to use as a set
      let addedRooms = {};

      // iterate over results {}
      for (let key in results) {
        let currentMessageObject = results[key];
        let roomName = currentMessageObject.roomname;

        if (roomName !== null && roomName !== undefined && roomName !== '') {

          // if roomName is NOT already in the addedRooms object
          if (addedRooms[roomName] === undefined) {

            // add it to the addedRooms object
            addedRooms[roomName] = roomName;
            RoomsView.$select.append(`<option>${roomName}</option>`);
            // $('#chats').append(currentMessageObject.username);
          }
        }
      }

      // when the user choose a room from the drop down menu
      $('#rooms select').change(function() {
        // debugger;
        for (let key in results) {
          let currentMessageObject = results[key];

          // so try that
          if (currentMessageObject.roomname === $('select option:roomname')) {
            // MessagesView.renderMessage(currentMessageObject.text);
            $('#chats').append(currentMessageObject.text);
          }
        }
      });
      // iterate server msgs
      //if data results i roomname matches selected from menu
      // clear chats div
      // append data results i text to chats
      console.log(data.results);





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


