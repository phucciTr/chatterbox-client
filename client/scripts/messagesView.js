var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Friends.initialize();
  },

  renderMessages: function(selectedRoom) {
    for (let i = 0; i < selectedRoom.length; i++) {
      let messageObj = selectedRoom[i];
      Messages.renderMessage(messageObj);
    }
  }
};
