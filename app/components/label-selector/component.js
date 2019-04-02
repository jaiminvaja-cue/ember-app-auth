import Component from '@ember/component';

export default Component.extend({
  task: null,
  actions: {
    labelClicked(label) {
      this.get('toggleLabel')(label, this.get('task'));
    }
  }
});
