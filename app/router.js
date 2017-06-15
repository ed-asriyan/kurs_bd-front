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
});

export default Router;
