var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    $('#chats').append(html);
  }
};

