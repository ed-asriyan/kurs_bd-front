/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  word: null,

  dialect: null,
  slang: null,

  actions: {
    getslang(value){
      this.set('slang',value);
    },

    getdialect(value){
      this.set('dialect',value);
    },
  },

});
