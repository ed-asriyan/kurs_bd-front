import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.route('languages');
  this.route('dialects');
  this.route('slangs');
  this.route('symbols');
  this.route('changeword');
  this.route('createword');
  this.route('changedialect');
  this.route('createdialect');
  this.route('changeslang');
  this.route('createslang');
  this.route('changelanguage');
  this.route('createlanguage');
  this.route('changesymbol');
  this.route('createsymbol');
  this.route('users');
});

export default Router;
