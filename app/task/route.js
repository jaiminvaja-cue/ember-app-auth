import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { storageFor } from 'ember-local-storage';

export default Route.extend({
  stats: storageFor('stats'),
  beforeModel() {
    const user = this.get('stats.user');
    // console.log("task route: USER:", user);
    if (user === undefined || user.access_token === null) {
      this.transitionTo('login');
    }
  },
  model() {
    return hash({
      task: this.store.findAll('task'),
      label: this.store.findAll('label')
    })
  }
});
