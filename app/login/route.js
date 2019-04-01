import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
export default Route.extend({
  stats: storageFor('stats'),
  beforeModel() {
    const user = this.get('stats.user');
    if (user === null || user.access_token === null) {
      this.transitionTo('login');
    } else {
      this.transitionTo('task');
    }
  }
});
