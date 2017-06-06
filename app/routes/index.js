import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      words: [
        {
          name: "Яблоко",
          description: "Apple",
          url: ''
        },
        {
          name: "Яблоко",
          description: "Apple",
        },
        {
          name: "Яблоко",
          description: "Apple",
        },
        {
          name: "Яблоко",
          description: "Apple",
        },
      ]
    };
  }
});
