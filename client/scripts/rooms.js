var Rooms = {

  initialize: () => {
    Rooms.addedRooms = {};
    Rooms.currentRoom;
  },

  renderRoom: function(roomname) {
    $('#rooms select').append(`<option value='${roomname}'>${roomname}</option>`);
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
  }
};

