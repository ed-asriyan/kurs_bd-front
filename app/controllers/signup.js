import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  email: '',
  nickname: '',
  password: '',
  passwordRepeat: '',

  actions: {
    submit() {
      this.get('session').register(this.get('nickname'), this.get('email'), this.get('password')).then(function (user) {
        this.transitionToRoute('index');
      }.bind(this)).catch(function (e) {
        alert(JSON.stringify(e));
      }.bind(this));
    },
  },

  isEmailValid: Ember.computed('email', function () {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.get('email'));
  }),

  isNicknameValid: Ember.computed('nickname', function () {
    return this.get('nickname.length') >= 4;
  }),

  isPasswordValid: Ember.computed('password', function () {
    return this.get('password.length') >= 4;
  }),

  isPasswordRepeatValid: Ember.computed('password', 'passwordRepeat', 'isPasswordValid', function () {
    return this.get('isPasswordValid') && this.get('password').toString() === this.get('passwordRepeat').toString();
  }),

  isFormValid: Ember.computed('isEmailValid', 'isPasswordValid', 'isNicknameValid', 'isPasswordRepeat', 'isPasswordRepeatValid', function () {
    return this.get('isPasswordValid') && this.get('isNicknameValid') && this.get('isEmailValid') && this.get('isPasswordRepeatValid');
  }),
});
