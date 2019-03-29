import config from '../config/environment';
import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
  namespace: "api",
  host: config.apiURL,
  session: service('session'),
  headers: computed('session.token', function () {
    return {
      'Authorization': `Bearer ${this.get('session.token')}`,
      'Accept': 'application/json'
    }
  })
});
