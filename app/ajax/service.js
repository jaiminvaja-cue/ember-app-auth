import Service from '@ember/service';
import $ from 'jquery';
// import { bind } from '@ember/runloop';
import config from '../config/environment';
import { storageFor } from 'ember-local-storage';

export default Service.extend({
  stats: storageFor('stats'),
  fire(path, method = "GET", data = {}) {
    const user = this.get('stats.user');
    return $.ajax({
      method,
      url: `${config.apiURL}/api/${path}`,
      headers: {
        'Authorization': `Bearer ${user.access_token}`,
      },
      data
    });
  }
});
