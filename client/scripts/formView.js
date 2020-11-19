var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('select').val()
    };


    Parse.create(message);
    // MessagesView.renderMessage(message);


    // console.log('event = ', event.val());
    console.log($('select').val());
    console.log($('#message').val());
    console.log(App.username);
  },

  /*
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      console.log('roomname = ', data.results[20].roomname);

      callback();
    });

  */

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};