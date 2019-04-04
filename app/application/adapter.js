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
  headers: computed('stats.user', function () {
    const user = this.get('stats.user');
    // console.log('adpter', user);
    return {
      'Authorization': `Bearer ${user.access_token}`,
      'Accept': 'application/json'
    }
  })
});
