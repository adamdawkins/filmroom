/*****************************************************************************/
/* PlayersIndex Publish Functions
/*****************************************************************************/

Meteor.publish('players_index', function () {
  return Players.find();
});
