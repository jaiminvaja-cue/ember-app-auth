import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleLabel(label, task) {
      this.get("toggleLabel")(label, task);
    },
    deleteRecord(task) {
      this.get("deleteRecord")(task);
    },
    update(task) {
      this.get("update")(task);
    }
  }
});
