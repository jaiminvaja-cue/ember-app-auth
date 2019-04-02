import Service from '@ember/service';
import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import $ from 'jquery';
import { run } from '@ember/runloop';

export default Service.extend({
  token: null,
  stats: storageFor('stats'),
  authenticate(log, pass) {
    const self = this;
    return run(function () {
      $.ajax({
        method: "POST",
        url: "http://embertaskapi.test/oauth/token",
        data: {
          'username': log,
          'password': pass,
          'client_id': 2,
          'client_secret': "ll3aKsnhCMzPIKMnOmqAYgu6hph5SpO8tx4SG1Yu",
          'scope': "*",
          'grant_type': 'password'
        }
      }).then(info => {
        // this.set('token', info.access_token);
        console.log(info);
        self.set('stats.user', {
          access_token: info.access_token,
          refresh_token: info.refresh_token
        });
      });
    });
    // Ember.$.ajax({
    //   method: "POST",
    //   url: "http://embertaskapi.test/oauth/token",
    //   data: {
    //     'username': log,
    //     'password': pass,
    //     'client_id': 2,
    //     'client_secret': "ll3aKsnhCMzPIKMnOmqAYgu6hph5SpO8tx4SG1Yu",
    //     'scope': "*",
    //     'grant_type': 'password'
    //   }
    // }).then(info => {
    //   // this.set('token', info.access_token);
    //   this.set('stats.user', {
    //     access_token: info.access_token,
    //     refresh_token: info.refresh_token
    //   });
    // });
  }
});