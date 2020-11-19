var Rooms = {
  render: _.template(
    `<div class="rooms"><%=' roomname '%>
    </div>`
  ),

  add: function(roomname) {

    // Testing..
    $('#rooms select').append(`<option value='${roomname}'>${roomname}</option>`);

    // $('#rooms button').click(function() {
    //   var newRoom;
    // });
  }
};

