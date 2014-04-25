Meteor.startup(function () {
  if(Players.find().count() === 0) {
    var players = [
      {number: '23', first_name: 'Ollie', last_name: 'Bennett'},
      {number: '60', first_name: 'Greg', last_name: 'Williams'},
      {number: '5', first_name: 'Mark', last_name: 'Harrison'} 
      ];

   for(var i = 0; i < players.length; i++) {
    Players.insert(players[i]);
   }
  }
});
