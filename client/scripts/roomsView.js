var RoomsView = {

  $roomButton: $('#roomButton'),
  $select: $('#rooms select'),
  $refresh: $('#refreshButton'),

  initialize: function() {

    this.$roomButton.click(function() {
      let roomname = window.prompt('Enter roomname');
      Rooms.add(roomname);
    });

    this.$refresh.click(function() {
      App.reloadPage();
    });

    this.$select.change();
  },

  renderRoom: function(roomname) {
    var html = Rooms.render(roomname);
    this.$select.append(html);
  },

  appendRooms: function(results) {

    for (let key in results) {
      let currentMessageObject = results[key];
      let roomName = currentMessageObject.roomname;
      let userName = currentMessageObject.username;
      let message = currentMessageObject.text;

      if (this.isFiltered(roomName)) {

        let messageObj = {username: userName, message: message};

        if (window.addedRooms[roomName] === undefined) {

          window.addedRooms[roomName] = [];
          window.addedRooms[roomName].push(messageObj);
          Rooms.add(roomName);

        } else { window.addedRooms[roomName].push(messageObj); }
      }
    }
    console.log('addedRooms = ', window.addedRooms);
  },

  renderSelectedRoom: function() {

    this.$select.change(function() {

      MessagesView.$chats.html('');

      let selectedRoomName = this.value;
      let selectedRoom = window.addedRooms[selectedRoomName];
      window.selectedRoom = selectedRoomName;

      for (let i = 0; i < selectedRoom.length; i++) {
        let messageObj = selectedRoom[i];
        MessagesView.renderMessage(messageObj);
      }
    });
  },

  isFiltered: function(roomName) {
    return roomName !== null && roomName !== undefined && (roomName.indexOf('script') === -1) && roomName !== '';
  },

  reRenderSelectedRoom: function() {
    MessagesView.$chats.html('');

    let selectedRoomName = window.selectedRoom;
    let selectedRoom = window.addedRooms[selectedRoomName];
    window.selectedRoom = selectedRoomName;

    for (let i = 0; i < selectedRoom.length; i++) {
      let messageObj = selectedRoom[i];
      MessagesView.renderMessage(messageObj);
    }
  },
};