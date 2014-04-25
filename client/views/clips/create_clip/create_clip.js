/*****************************************************************************/
/* CreateClip: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateClip.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var clip = {
      name: $("#clip_name").val(),
      matchId: this._id
    };
    
    if(clip.name !== "") {
      var clipId = Clips.insert(clip);
      Matches.update({_id: this._id}, {
        $addToSet: { clips: {_id: clipId, name: clip.name} }
      });
    }

  }
});

Template.CreateClip.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateClip: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateClip.created = function () {
};

Template.CreateClip.rendered = function () {
};

Template.CreateClip.destroyed = function () {
};
