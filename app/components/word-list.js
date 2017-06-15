import Ember from 'ember';

export default Ember.Component.extend({
  index: Ember.inject.controller('index'),
  dictionary: Ember.inject.service('dictionary'),
  changeword_controller: Ember.inject.controller('changeword'),
  words: null,
  actions: {
    changeword(word){
      this.get('changeword_controller').set('word',word);
      this.get('index').transitionToRoute('changeword');
    }
  },
});
