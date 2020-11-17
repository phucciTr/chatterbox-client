var MessageView = {

  render: _.template(
    `<div class="chat"><div class="username"><%= username %></div>
        <div class="message"><%= message %></div>
      </div>`
  )

};


/*

var compiled = _.template(
  "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
    "<div class='movie-info'>" +
      "<h3 class='movie-title'>" +
         "<%= movieTitle %>" +
      "</h3>" +
      "<p class='movie-director'>" +
         "<%= movieDirector %>" +
      "</p>" +
    "</div>" +
  "</div>"
);


{
  "messages": [{
      "username": "Phucci",
      "text": "Hello World!",
      "roomname": "JP"
    }, {
      "username": "Javier",
      "text": "Hello World again!",
      "roomname": "JP"
    }, {
      "username": "HackReactor",
      "text": "You're an engineer!",
      "roomname": "JP"
    }]
}
*/