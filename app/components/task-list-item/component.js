import Component from '@ember/component';

export default Component.extend({
  actions: {
    edit(task) {
      this.get('edit')(task);
    },
    toggleStar(task) {
      this.get('toggleStar')(task);
    },
    toggleComplete(task) {
      this.get('toggleComplete')(task);
    }
  }
});
