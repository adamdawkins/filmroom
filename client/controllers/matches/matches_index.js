MatchesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('matches_index');
  },

  data: function () {
    return {matches: Matches.find()};
  },

  action: function () {
    this.render();
  }
});
