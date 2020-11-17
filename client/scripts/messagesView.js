var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    MessageView.render(message);
    $('#chats').append(html);
  }

  // testing


};

$.getJSON('client/scripts/messages.json', function(data) {
  // do stuff with the data
  console.log('data = ', data);
});