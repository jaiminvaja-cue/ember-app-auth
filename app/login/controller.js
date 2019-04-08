import Controller from '@ember/controller';
import { inject } from '@ember/service';
import has from "lodash/has";
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
          // console.log(err.responseJSON)
          this.set('err', err.responseJSON.message)
          this.set("err", has(err.responseJSON, 'hint') ? err.responseJSON.hint : err.responseJSON.message);
        });
    }
  }
});
