import Ember from 'ember';
import fetch from 'fetch';

const _call = function (httpMethod, url, content_type, params, body) {
  const initPomise = {
    method: httpMethod,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-type': content_type,
    }
  };
  if (httpMethod === 'POST') {
    if (body !== undefined) {
      initPomise.body = JSON.stringify(body);
    }
  }

  let __url = "//kursbd-backend.herokuapp.com/" + url;

  if (params !== null) {
    __url += '?';
    for (let key in params) {
      __url += `${key}=${params[key]}&`;
    }
    __url = __url.slice(0, -1);
  }

  return fetch(__url, initPomise)
    .then(response => {
      if (response.status / 100 !== 2) throw response;
      return response.json();
    });
};

export default Ember.Service.extend({
  currentUser: null,

  user: Ember.computed('currentUser', function () {
    if (!this.get('currentUser')) this.data();
    return this.get('currentUser');
  }),

  register(username, email, password) {
    return _call("POST", "user/register", "application/json", null, {
      username, email, password
    }).then(function (user) {
      return this.data();
    }.bind(this));
  },

  login(username, password) {
    return _call("POST", "user/login", "application/json", null, {
      username, password
    }).then(function () {
      return this.data();
    }.bind(this));
  },

  logout() {
    return _call("POST", "user/logout", "application/json", null, {}).then(function () {
      this.set('currentUser', null);
    }.bind(this));
  },

  update(username, email, password) {
    return _call("POST", "user/update", "application/json", null, {
      username, email, password
    }).then(function () {
      return this.data();
    }.bind(this));
  },

  data() {
    return _call("GET", "user/data", "application/json", null, {}).then(function (user) {
      this.set('currentUser', user);
    }.bind(this));
  },

  remove() {
    return _call("DELETE", "user/delete", "application/json", null, {}).then(function () {
      this.set('currentUser', null);
    }.bind(this));
  },
});
