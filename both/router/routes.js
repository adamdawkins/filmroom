/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('clips.index', {path: '/clips'});
  this.route('create.clip', {path: '/clips/new'});
  this.route('matches.index', {path: '/'});
  this.route('create.match', {path: '/matches/new'});
  this.route('show.match', {path: '/matches/:_id'});
  this.route('players.index', {path: '/players'});
});
