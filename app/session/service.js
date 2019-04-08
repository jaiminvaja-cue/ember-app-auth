
import Service from '@ember/service';
import $ from 'jquery';
import { bind } from '@ember/runloop';
import { storageFor } from 'ember-local-storage';
import CryptoJS from "crypto-js";

export default Service.extend({
  token: null,
  stats: storageFor('stats'),
  authenticate(log, pass) {
    const encryptedWord = CryptoJS.enc.Utf8.parse(pass);
    const encrypted = CryptoJS.enc.Base64.stringify(encryptedWord);
    return $.ajax({
      method: "POST",
      url: "http://embertaskapi.test/oauth/token",
      data: {
        'username': log,
        'password': encrypted,
        'client_id': 2,
        'client_secret': "ll3aKsnhCMzPIKMnOmqAYgu6hph5SpO8tx4SG1Yu",
        'scope': "*",
        'grant_type': 'password'
      }
    }).then(bind(this, (data) => {
      this.set('stats.user', {
        access_token: data.access_token,
        refresh_token: data.refresh_token
      });
    }));
  }
});
