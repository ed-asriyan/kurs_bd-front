import Ember from 'ember';


export default Ember.Service.extend({
  network: Ember.inject.service('network'),

  currentUser: null,

  user: Ember.computed('currentUser', function () {
    if (!this.get('currentUser')) this.data();
    return this.get('currentUser');
  }),

  register(username, email, password) {
    return this.get('network').call("POST", "user/register", "application/json", null, {
      username, email, password
    }).then(function (user) {
      return this.data();
    }.bind(this));
  },

  login(username, password) {
    return this.get('network').call("POST", "user/login", "application/json", null, {
      username, password
    }).then(function () {
      return this.data();
    }.bind(this));
  },

  logout() {
    return this.get('network').call("POST", "user/logout", "application/json", null, {}).then(function () {
      this.set('currentUser', null);
    }.bind(this));
  },

  update(username, email, password) {
    return this.get('network').call("POST", "user/update", "application/json", null, {
      username, email, password
    }).then(function () {
      return this.data();
    }.bind(this));
  },

  data() {
    return this.get('network').call("GET", "user/data", "application/json", null, {}).then(function (user) {
      this.set('currentUser', user);
    }.bind(this));
  },

  remove() {
    return this.get('network').call("DELETE", "user/delete", "application/json", null, {}).then(function () {
      this.set('currentUser', null);
    }.bind(this));
  },
});
