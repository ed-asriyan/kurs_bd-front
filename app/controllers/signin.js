import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  nickname: null,
  password: null,

  actions: {
    submit() {
      this.get('session').login(this.get('nickname'), this.get('password')).then(function (user) {
        this.transitionToRoute('index');
      }.bind(this)).catch(function (e) {
        alert(JSON.stringify(e));
      }.bind(this));
    },
  },

  isNicknameValid: Ember.computed('nickname', function () {
    return this.get('nickname.length');
  }),

  isPasswordValid: Ember.computed('password', function () {
    return this.get('password.length');
  }),

  isFormValid: Ember.computed('isPasswordValid', 'isNicknameValid', function () {
    return this.get('isPasswordValid') && this.get('isNicknameValid');
  }),
});
