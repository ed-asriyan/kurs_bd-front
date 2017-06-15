import Ember from 'ember';

export default Ember.Component.extend({
  index: Ember.inject.controller('index'),
  changeword_controller: Ember.inject.controller('changeword'),
  actions: {
    changeword(word){
      this.get('changeword_controller').set('word',word);
      this.get('index').transitionToRoute('changeword');
    }
  },
});
