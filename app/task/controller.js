import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  title: "",
  currentComponent: "list",
  activeTask: null,
  today: (() => new Date())(),
  isListView: computed('currentComponent', function () {
    return this.currentComponent === 'list';
  }),
  isEditView: computed('currentComponent', function () {
    return this.currentComponent === 'edit';
  }),
  isCreateTaskDisabled: computed('title', function () {
    return this.title === ""
  }),
  actions: {
    createTask() {
      const newTask = this.store.createRecord('task', { "title": this.get("title") });
      newTask.save();
    },
    edit(task) {
      this.set('currentComponent', "edit");
      this.set('activeTask', task);
    },
    update() {
      const activeTask = this.get('activeTask');
      this.store.findRecord('task', 1).then(function (task) {

        // ...after the record has loaded
        task.set('title', activeTask.title);
        task.save();

        this.set('currentComponent', "list");
        this.set('activeTask', null);
      });
    }
  }
});
