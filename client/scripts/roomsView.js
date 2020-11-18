var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.click(function() {
      let roomname = window.prompt('Enter roomname');
      Rooms.add(roomname);
    });

    this.$select.change();
  },

  renderRoom: function(roomname) {
    var html = Rooms.render(roomname);
    this.$select.append(html);
  },

  appendRoom: function() {

  }
};

// let results = data.results;

// // iterate over results {}
// for (let key in results) {
//   let currentMessageObject = results[key];
//   let roomName = currentMessageObject.roomname;

//   if (roomName !== 'null' || roomName !== 'undefined') {
//     RoomsView.$select.append(`<option>${roomName}</option>`);
//   }

// }
