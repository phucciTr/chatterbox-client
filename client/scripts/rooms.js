var Rooms = {

  initialize: () => {
    Rooms.addedRooms = {};
    Rooms.currentRoom;
  },

  renderRoom: function(roomName) {
    $('#rooms select').append(`<option value='${roomName}'>${roomName}</option>`);
  },

  createNewRoom: (roomName) => {
    Rooms.addedRooms[roomName] = [];
    Rooms.renderRoom(roomName);
  },

  addMessage: (roomName, message) => {
    Rooms.addedRooms[roomName].push(message);
  },

  isPresent: (roomName) => {
    return Rooms.addedRooms[roomName] !== undefined;
  },

  isFiltered: (roomName) => {
    return roomName !== null && roomName !== undefined && (roomName.indexOf('script') === -1) && roomName !== '';
  },

  getSelectedRoom: (selectedRoomName) => {
    let selectedRoom = Rooms.addedRooms[selectedRoomName];
    Rooms.currentRoom = selectedRoomName;
    return selectedRoom;
  },

  renderRoomMessages: (selectedRoom) => {
    MessagesView.renderMessages(selectedRoom);
    Friends.renderFriends();
  }
};

