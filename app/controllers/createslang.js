/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  managedictionary: Ember.inject.service('managedictionary'),
  dictionary: Ember.inject.service('dictionary'),
  index: Ember.inject.controller('index'),

  slang: null,
  description: null,


  init(){
  },

  actions: {
    createslang(){
      this.get('managedictionary').create_slang(this.get('slang'),
        this.get('description')).then(function (response) {

        alert(response.message);
      }.bind(this)).catch((e)=>{
        alert(e.message)
      });
    },

    getdescription(value){
      this.set('description',value);
    },
  }

});
