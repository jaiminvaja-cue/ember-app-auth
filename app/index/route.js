import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';

export default Route.extend({
  stats: storageFor('stats'),
  beforeModel() {
    const user = this.get('stats.user');
    // console.log(user);
    if (user !== undefined && user.access_token !== null) {
      this.transitionTo('task');
    }
  }
});
