import config from '../config/environment';
import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';


export default DS.RESTAdapter.extend({
  namespace: "api",
  host: config.apiURL,
  session: service('session'),
  stats: storageFor('stats'),
  headers: computed('session.token', function () {
    const user = this.get('stats.user');
    return {
      'Authorization': `Bearer ${user.access_token}`,
      'Accept': 'application/json'
    }
  })
});
