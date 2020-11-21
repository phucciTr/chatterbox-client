var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    window.addedRooms = {};
    window.selectedRoom;

    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      let results = data.results;

      RoomsView.appendRooms(results);
      RoomsView.renderSelectedRoom(window.addedRooms);

      callback();
  });

  },

  reloadPage: function() {
    RoomsView.$select.html('');
    MessagesView.$chats.html('');
    window.addedRooms = {};

    Parse.readAll((data) => {
      let results = data.results;
      App.startSpinner();
      RoomsView.appendRooms(results);
      RoomsView.renderSelectedRoom(window.addedRooms);
      RoomsView.reRenderSelectedRoom();
      App.stopSpinner();
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