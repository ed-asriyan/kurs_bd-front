/**
 * Created by pacman29 on 07.06.17.
 */
import baseSender from 'BaseSender';

export default class DictionaryManager extends baseSender {
  constructor(host) {
    if (DictionaryManager.__instance) {
      return DictionaryManager.__instance;
    }
    super(host);
    DictionaryManager.__instance = this;
    this.__main_url = "/managedictionary";
  }

  create_word(word,dialect,slang,discription,file){
    return this.__fetch.call("POST",this.__main_url+"/createword","multipart/form-data",
      {
        json:{
          word,dialect,slang,discription
        },
        file: file
      },null);
  }

  create_dialect(dialect,discription,language){
    return this.__fetch.call("POST",this.__main_url+"/createdialect","application/json",null,{
      dialect,discription,language
    });
  }

  create_language(language,discription){
    return this.__fetch.call("POST",this.__main_url+"/createlanguage","application/json",null,{
      language,discription
    });
  }

  create_slang(slang,discription){
    return this.__fetch.call("POST",this.__main_url+"/createslang","application/json",null,{
      slang,discription
    })
  }

  create_symbol(symbol,dialect,discription,file){
    return this.__fetch.call("POST",this.__main_url+"/createsymbol","multipart/form-data",
      {
        json:{
          symbol,dialect,discription
        },
        file: file
      },null);
  }

  change_word(word_id,new_slang,new_dialect,new_discription){
    return this.__fetch.call("POST",this.__main_url+"/changeword","application/json",null,{
      word_id,new_discription,new_dialect,new_slang
    })
  }

  change_dialect(dialect,new_dialect,new_language,new_discription){
    return this.__fetch.call("POST",this.__main_url+"/changedialect","application/json",null,{
      dialect,new_dialect,new_language,new_discription
    })
  }

  change_slang(slang,new_slang,new_discription){
    return this.__fetch.call("POST",this.__main_url+"/changeslang","application/json",null,{
      slang,new_slang,new_discription
    })
  }

  change_language(language,discription){
    return this.__fetch.call("POST",this.__main_url+"/changelanguage","application/json",null,{
      language,discription
    })
  }

  change_symbol(symbol,dialect,new_symbol,new_dialect,discription){
    return this.__fetch.call("POST",this.__main_url+"/changesymbol","application/json",null,{
      symbol,dialect,new_symbol,new_dialect,discription
    })
  }

  delete_word(id){
    return this.__fetch.call("POST",this.__main_url+"/deleteword","application/json",null,{
      id
    })
  }

  delete_dialect(dialect){
    return this.__fetch.call("POST",this.__main_url+"/deletedialect","application/json",null,{
      dialect
    })
  }

  delete_language(language){
    return this.__fetch.call("POST",this.__main_url+"/deleteword","application/json",null,{
      language
    })
  }

  delete_slang(slang){
    return this.__fetch.call("POST",this.__main_url+"/deleteslang","application/json",null,{
      slang
    })
  }

  delete_symbol(symbol,dialect){
    return this.__fetch.call("POST",this.__main_url+"/deletesymbol","application/json",null,{
      symbol,dialect
    })
  }
}
