/*****************************************************************************/
/* PlayersIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.PlayersIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PlayersIndex.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
  count: function () {
    return Players.find().count();
  }
});

/*****************************************************************************/
/* PlayersIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.PlayersIndex.created = function () {
};

Template.PlayersIndex.rendered = function () {
};

Template.PlayersIndex.destroyed = function () {
};
