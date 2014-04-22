MatchShowController = RouteController.extend({
  before: function () {
    var _id = this.params._id;  

    if(App.subs.match)
      App.subs.match.stop()

    App.subs.match = Meteor.subscribe('match', _id);
  },
  waitOn: function () {
    return App.subs.match;
  },

  data: function () {
    return Matches.findOne({_id: this.params._id});
  },

  action: function () {
    this.render();
  }
});
