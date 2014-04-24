/*****************************************************************************/
/* CreateMatch: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateMatch.events({
  'submit #create_match_form': function (e, tmpl) {
    var match = {
      name: $('#match_opponent').val(),
      date: $('#match_date').val()
    }

    Meteor.call('/app/matches/create', match, function (err, matchId) {
      if (err) {
       console.log(err);
      } else {
        Router.go('matches.index');
      }
    });

    e.preventDefault();
  }
});

Template.CreateMatch.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateMatch: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateMatch.created = function () {
};

Template.CreateMatch.rendered = function () {
};

Template.CreateMatch.destroyed = function () {
};
