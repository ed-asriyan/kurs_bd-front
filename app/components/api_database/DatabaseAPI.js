/**
 * Created by pacman29 on 07.06.17.
 */
import dictionary from 'Dictionary';
import dictionarymanager from 'DictionaryManager';
import users from 'Users';
import usersmanager from 'UsersManager';

export default class DatabaseAPI{
  constructor(host){
    this._dictionary = new dictionary(host);
    this._dictionarymanager = new dictionarymanager(host);
    this._users = new users(host);
    this._usersmanager = new usersmanager(host);
  }


  get dictionary() {
    return this._dictionary;
  }

  get dictionarymanager() {
    return this._dictionarymanager;
  }

  get users() {
    return this._users;
  }

  get usersmanager() {
    return this._usersmanager;
  }
}
