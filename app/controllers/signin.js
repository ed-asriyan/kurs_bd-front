import Ember from 'ember';

export default Ember.Controller.extend({
  nickname: null,
  password: null,

  actions: {
    submit() {
      // todo:
      this.transitionToRoute('index');
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
