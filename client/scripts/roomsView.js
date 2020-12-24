var RoomsView = {

  $roomButton: $('#roomButton'),
  $select: $('#rooms select'),
  $refresh: $('#refreshButton'),

  initialize: function() {

    Rooms.initialize();

    this.$roomButton.click(function() {
      let roomName = window.prompt('Enter roomname');

      if (!Rooms.isPresent(roomName)) { Rooms.createNewRoom(roomName); }
    });

    this.$refresh.click(function() {
      MessagesView.$chats.html('');
    });

    this.$select.change();
  },

  appendRooms: function(results) {

    for (let key in results) {
      let currentMessageObject = results[key];
      let roomName = currentMessageObject.roomname;
      let userName = currentMessageObject.username;
      let message = currentMessageObject.text;

      if (Rooms.isFiltered(roomName)) {

        let messageObj = {username: userName, message: message};

        if (!Rooms.isPresent(roomName)) {
          Rooms.createNewRoom(roomName);
          Rooms.addMessage(roomName, messageObj);

        } else { Rooms.addMessage(roomName, messageObj); }
      }
    }
  },

  renderSelectedRoom: function() {

    this.$select.change(function() {

      MessagesView.$chats.html('');

      let selectedRoomName = this.value;
      let selectedRoom = Rooms.addedRooms[selectedRoomName];
      Rooms.currentRoom = selectedRoomName;

      MessagesView.renderMessages(selectedRoom);
      Friends.renderFriends();
    });
  },

  reRenderSelectedRoom: function() {
    MessagesView.$chats.html('');

    let selectedRoomName = Rooms.currentRoom;
    let selectedRoom = Rooms.addedRooms[selectedRoomName];
    Rooms.currentRoom = selectedRoomName;

    MessagesView.renderMessages(selectedRoom);
    Friends.renderFriends();
  },

  renderRoom: function(roomName) {
    MessagesView.$chats.html('');

    let selectedRoom = Rooms.addedRooms[roomName];
    Rooms.currentRoom = roomName;

    MessagesView.renderMessages(selectedRoom);
    Friends.renderFriends();
  },
};