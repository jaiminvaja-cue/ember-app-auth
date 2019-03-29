import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  token: null,
  authenticate(log, pass) {
    return Ember.$.ajax({
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
      console.log(info);
      this.set('token', info.access_token);
    });
  }
});
