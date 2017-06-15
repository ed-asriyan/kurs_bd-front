import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),

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

    getslang(value){
      if(value === "All"){
        this.set('slang_search',null);
        return;
      }
      this.set('slang_search',value);
    },

    getdialect(value){
      if(value === "All"){
        this.set('dialect_search',null);
        return;
      }
      this.set('dialect_search',value);
    },
  },

  init() {
    this._super();
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects', dialects);
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs', slangs);
    }.bind(this));
  },
});
