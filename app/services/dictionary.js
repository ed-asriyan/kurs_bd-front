import Ember from 'ember';

export default Ember.Service.extend({
  network: Ember.inject.service('network'),

  search(word, dialect = null, slang = null) {
    let body = {};
    if (!word) {
      throw "word is null";
    }
    body.word = word;
    if (dialect) {
      body.dialect = dialect;
    }
    if (slang) {
      body.slang = slang;
    }
    return this.get('network').calll("POST", "dictionary/search", "application/json", null, body);
  },

  wordinsymbol(word, dialect) {
    return this.get('network').call("POST", "dictionary/wordinsymbol", "application/json", null, {word, dialect});
  },

  languages() {
    return this.get('network').call("GET", "dictionary/languages", "application/json", null, null);
  },

  dialects() {
    return this.get('network').call("GET", "dictionary/dialects", "application/json", null, null);
  },

  slangs() {
    return this.get('network').call("GET", "dictionary/slangs", "application/json", null, null);
  },

  words() {
    return this.get('network').call("GET", "dictionary/words", "application/json", null, null);
  },

  symbols() {
    return this.__fetch.call("GET", "dictionary/symbols", "application/json", null, null);
  },
});
