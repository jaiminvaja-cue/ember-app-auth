import Controller from '@ember/controller';

export default Controller.extend({
  err: null,
  // user: (() => {
  //   return {
  //     name: "",
  //     email: null
  //   };
  // })(),
  actions: {
    registerUser() {
      const user = this.store.createRecord('user', {
        "name": this.get("user.name"),
        "email": this.get("user.email"),
        "password": this.get("user.password")
      });

      user.save().then(() => {
        this.transitionToRoute('login');
      }).catch(() => {
        this.set('err', 'fail to register')
        // console.log(e);
      });
      // console.log("user", user);
      // console.log("newobj", newobj);
    }
  }
});
