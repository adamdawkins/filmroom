/*****************************************************************************/
/* MatchesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('matches_index', function () {
  return Matches.find();
});
