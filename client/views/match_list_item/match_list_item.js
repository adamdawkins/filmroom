/*****************************************************************************/
/* MatchListItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.MatchListItem.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MatchListItem.helpers({
  date: function () {
    return moment(this.date).format('MMM Do YYYY');
  }
});

/*****************************************************************************/
/* MatchListItem: Lifecycle Hooks */
/*****************************************************************************/
Template.MatchListItem.created = function () {
};

Template.MatchListItem.rendered = function () {
};

Template.MatchListItem.destroyed = function () {
};
