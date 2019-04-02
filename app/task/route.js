import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      task: this.store.findAll('task'),
      label: this.store.findAll('label')
    })
  }
});
