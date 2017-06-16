import Ember from 'ember';

export default Ember.Component.extend({
  index: Ember.inject.controller('index'),
  dictionary: Ember.inject.service('dictionary'),
  managedictionary: Ember.inject.service('managedictionary'),
  changeword_controller: Ember.inject.controller('changeword'),
  words: null,
  actions: {
    changeword(word){
      this.get('changeword_controller').set('word',word);
      this.get('index').transitionToRoute('changeword');
    },

    deleteword(word){
      this.get('managedictionary').delete_word(word.id).then(function (response) {
        alert(response.message);
        this.get('dictionary').words().then(function (words) {
          this.get('index').set('words',words);
          this.rerender();
        }.bind(this));
      }.bind(this));
    }
  },
});
