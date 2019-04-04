import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  username: null,
  password: null,
  session: inject(),
  err: null,
  actions: {
    authenticate() {
      this.get('session').authenticate(this.get('username'), this.get('password'))
        .then(() => {
          // console.log("In auth");
          this.transitionToRoute('task');
        }, err => {
          this.set("err", err.responseJSON.hint !== undefined ? "Invalid Credentails" : err.responseJSON.hint);
        });
    }
  }
});
