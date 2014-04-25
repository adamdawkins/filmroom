PlayersIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('players_index');
  },

  data: function () {
    return {players: Players.find()};
  },

  action: function () {
    this.render();
  }
});
