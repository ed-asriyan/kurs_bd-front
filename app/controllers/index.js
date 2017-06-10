import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),

  words: null,

  init() {
    this._super();
    this.get('dictionary').words().then(function (words) {
      this.set('words', words);
    }.bind(this));
  },
});
