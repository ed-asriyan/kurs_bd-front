import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  user: Ember.computed.alias('session.user'),

  actions: {
    logout() {
      return this.get('session').logout().then(function () {
        this.get('router').transitionTo('index');
      }.bind(this)).catch(function (e) {
        alert(JSON.stringify(e));
      }.bind(this));
    },
  },
});
