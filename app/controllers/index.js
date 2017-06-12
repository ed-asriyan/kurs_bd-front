import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),

  words: null,

  word_search: null,
  dialect_search: null,
  slang_search: null,

  select_slangs: null,
  select_dialects: null,

  actions: {
    search(){
      this.get('dictionary').search(this.get('word_search'),
        this.get('dialect_search'),
        this.get('slang_search')).then(words => {
        this.set('words',words);
      }).bind(this).catch(e => {
        alert(JSON.stringify(e));
      });
    },

    getslang(){
      this.slang_search = document.getElementsByClassName("search__select_slangs")[0].value;
    },

    getdialect(){
      this.dialect_search = document.getElementsByClassName("search__select_dialects")[0].value;
    }
  },

  init() {
    this._super();
    this.get('dictionary').words().then(function (words) {
      this.set('words', words);
    }.bind(this));
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects', dialects);
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs', slangs);
    }.bind(this));
  },
});
