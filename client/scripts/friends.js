var Friends = {

  initialize: function() {

    $('#chats').on('click', '.username', function() {

      Friends.clickedName = $(this).text();
      Friends.addFriend(Friends.clickedName);
      Friends.renderFriend(Friends.clickedName);
    });
  },

  friendsList: [],

  clickedName: '',

  addFriend: function(userName) {
    if (this.isNotFriend(userName)) {
      this.friendsList.push(userName);
      console.log(this.friendsList);
    }
  },

  renderFriend: function(userName) {
    if (this.isFriend(userName)) {
      $(`div > div:contains(${Friends.clickedName})`).addClass('friend');
      $(`div > div:contains(${userName})`).addClass('friend');
    }
  },

  isNotFriend: function(userName) {
    return this.friendsList.indexOf(userName) === -1;
  },

  isFriend: function(userName) {
    return this.friendsList.indexOf(userName) !== -1;
  },

  indexOfFriend: function(clickedName) {
    return friendsList.indexOf(clickedName);
  },

  renderFriends: function() {
    Friends.friendsList.forEach(function(currentFriend) {
      Friends.renderFriend(currentFriend);
    });
  },
};


