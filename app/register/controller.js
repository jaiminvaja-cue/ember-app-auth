import Controller from '@ember/controller';

export default Controller.extend({
  err: null,
  actions: {
    registerUser() {
      const user = this.store.createRecord('user', {
        "name": this.get("name"),
        "email": this.get("email"),
        "password": this.get("password")
      });
      const newobj = user.save().then(() => {
        this.transitionToRoute('login');
      }).catch(e => {
        this.set('err', 'fail to register')
        console.log(e);
      });
      // console.log("user", user);
      // console.log("newobj", newobj);
    }
  }
});
