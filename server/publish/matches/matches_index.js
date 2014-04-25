/*****************************************************************************/
/* MatchesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('matches_index', function () {
  return Matches.find();
});

Meteor.publish('match', function (id) {
  return Matches.findOne({_id: id});
});
