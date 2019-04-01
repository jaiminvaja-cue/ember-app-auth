import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  username: null,
  password: null,
  session: inject(),
  actions: {
    authenticate() {
      this.get('session').authenticate(this.get('username'), this.get('password'))
        .then(() => {
          console.log("In auth");
          this.transitionToRoute('task');
        }, err => {
          console.log(`Error with login ${err.responseText}`)
        });
    }
  }
});
