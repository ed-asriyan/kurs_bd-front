/**
 * Created by pacman29 on 07.06.17.
 */
import baseSender from 'BaseSender';

export default class Dictionary extends baseSender{
  constructor(host){
    if(Dictionary.__instance){
      return Dictionary.__instance;
    }
    super(host);
    Dictionary.__instance = this;
    this.__main_url = "/dictionary";
  }

  search(word,dialect = null,slang = null){
    let body = {};
    if(!word){
      throw "word is null";
    }
    body.word = word;
    if(dialect){
      body.dialect = dialect;
    }
    if(slang){
      body.slang = slang;
    }
    return this.__fetch.call("POST",this.__main_url+"/search","application/json",null,body);
  }

  wordinsymbol(word,dialect){
    return this.__fetch.call("POST",this.__main_url+"/wordinsymbol","application/json",null,{word,dialect});
  }

  languages(){
    return this.__fetch.call("GET",this.__main_url+"/languages","application/json",null,null);
  }

  dialects(){
    return this.__fetch.call("GET",this.__main_url+"/dialects","application/json",null,null);
  }

  slangs(){
    return this.__fetch.call("GET",this.__main_url+"/slangs","application/json",null,null);
  }

  words(){
    return this.__fetch.call("GET",this.__main_url+"/words","application/json",null,null);
  }

  symbols(){
    return this.__fetch.call("GET",this.__main_url+"/symbols","application/json",null,null);
  }
}
