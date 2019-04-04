import Component from '@ember/component';
import { storageFor } from 'ember-local-storage';


export default Component.extend({
  stats: storageFor('stats'),
  actions: {
    signOut() {
      this.get('stats').clear();

      this.get('logout')();
    }
  }
});
