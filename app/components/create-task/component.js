import Component from '@ember/component';

export default Component.extend({
  task: null,
  actions: {
    save() {
      let task = this.get('task');

      task.validate()
        .then(({ validations }) => {
          if (validations.get('isValid')) {
            // console.log("Validated!!")
          }
        });
    }
  }
});
