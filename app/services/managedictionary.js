/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Service.extend({
  network: Ember.inject.service('network'),

  create_word(word,dialect,slang,description,file){
    return this.get('network').call_file("managedictionary/createword", {
          word,dialect,slang,description
        },file);
  },

  create_dialect(dialect,description,language){
    return this.get('network').call("POST","managedictionary/createdialect","application/json",null,{
      dialect,description,language
    });
  },

  create_language(language,description){
    return this.get('network').call("POST","managedictionary/createlanguage","application/json",null,{
      language,description
    });
  },

  create_slang(slang,description){
    return this.__fetch.call("POST","managedictionary/createslang","application/json",null,{
      slang,description
    })
  },

  create_symbol(symbol,dialect,description,file){
    return this.get('network').call_file("managedictionary/createsymbol",
      {symbol,dialect,description}, file);
  },

  change_word(word_id,new_slang,new_dialect,new_description){
    return this.get('network').call("POST","managedictionary/changeword","application/json",null,{
      word_id,new_description,new_dialect,new_slang
    })
  },

  change_dialect(dialect,new_dialect,new_language,new_description){
    return this.get('network').call("POST","managedictionary/changedialect","application/json",null,{
      dialect,new_dialect,new_language,new_description
    })
  },

  change_slang(slang,new_slang,new_description){
    return this.get('network').call("POST","managedictionary/changeslang","application/json",null,{
      slang,new_slang,new_description
    })
  },

  change_language(language,description){
    return this.get('network').call("POST","managedictionary/changelanguage","application/json",null,{
      language,description
    })
  },

  change_symbol(symbol,dialect,new_symbol,new_dialect,description){
    return this.get('network').call("POST","managedictionary/changesymbol","application/json",null,{
      symbol,dialect,new_symbol,new_dialect,description
    })
  },

  delete_word(id){
    return this.get('network').call("POST", "managedictionary/deleteword", "application/json", null, {
      id
    })
  },

  delete_dialect(dialect){
    return this.get('network').call("POST","managedictionary/deletedialect","application/json",null,{
      dialect
    })
  },

  delete_language(language){
    return this.get('network').call("POST","managedictionary/deleteword","application/json",null,{
      language
    })
  },

  delete_slang(slang){
    return this.get('network').call("POST","managedictionary/deleteslang","application/json",null,{
      slang
    })
  },

  delete_symbol(symbol,dialect){
    return this.get('network').call("POST","managedictionary/deletesymbol","application/json",null,{
      symbol,dialect
    })
  },
});
