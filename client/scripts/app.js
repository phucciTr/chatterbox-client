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
        let userName = currentMessageObject.username;
        let message = currentMessageObject.text;

        if (roomName !== null && roomName !== undefined && roomName !== '') {

          // if roomName is NOT already in the addedRooms object
          if (addedRooms[roomName] === undefined) {

            addedRooms[roomName] = {};

            // add it to the addedRooms object
            let messageObj = {username: userName, message: message};
            addedRooms[roomName][userName] = messageObj;
            console.log('addedrooms[roomName] = ', addedRooms[roomName]);

            RoomsView.$select.append(`<option>${roomName}</option>`);

          } else {
            let messageObj = {username: userName, message: message};
            addedRooms[roomName][userName] = messageObj;
          }
        }
      }
      console.log('addedRooms = ', addedRooms);

      RoomsView.$select.change(function() {
        let selectedRoomName = this.value;

        let selectedRoom = addedRooms[selectedRoomName];
        console.log('addedrooms[roomName] = ', selectedRoom);

        MessagesView.$chats.html('');
        for (var i in selectedRoom) {
          MessagesView.renderMessage(selectedRoom[i]);
        }
      });
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