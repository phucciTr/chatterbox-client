var Rooms = {
  render: _.template(
    `<div class="rooms"><%=' roomname '%>
    </div>`
  ),

  add: function(roomname) {

    $('#rooms select').append(`<option value='${roomname}'>${roomname}</option>`);

  }
};

