ShowMatchController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('match', this.params._id);
  },

  data: function () {
    return {match:Matches.findOne(this.params._id)};
  },

  action: function () {
    this.render();
  }
});
