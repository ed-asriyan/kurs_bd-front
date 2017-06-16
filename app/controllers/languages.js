/**
 * Created by pacman29 on 14.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  languages: null,

  init() {
    this._super();
    this.get('dictionary').languages().then(function (languages) {
      this.set('languages', languages);
    }.bind(this));
  },
});
