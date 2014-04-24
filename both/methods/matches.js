/*****************************************************************************/
/* Matches Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/matches/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

  '/app/matches/create': function (match) {
    if (match.name === '') {
      throw new Meteor.Error(401, "Opponent is required"); 
    }

    if (match.date === '') {
      throw new Meteor.Error(401, "Date is required"); 
    }

    return Matches.insert(match);
  }

});
