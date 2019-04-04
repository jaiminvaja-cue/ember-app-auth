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
    logout() {
      this.transitionToRoute('login');
    },
    createTask() {
      if (this.get("title").length) {
        const newTask = this.store.createRecord('task', { "title": this.get("title") });
        newTask.save();
        this.set("title", "");
      }
    },
    edit(task) {
      this.set('currentComponent', "edit");
      this.set('activeTask', task);
    },
    async update() {
      // GET TASK
      const activeTask = this.get('activeTask');
      // GET AND UPDATE TASK
      // const task = await this.store.findRecord('task', activeTask.id);
      if (activeTask.title.length) {
        activeTask.set('title', activeTask.title);
        activeTask.save();
        // Change View
        this.set('currentComponent', "list");
        this.set('activeTask', null);
      }

    },
    async deleteRecord() {
      // GET TASK
      const activeTask = this.get('activeTask');
      // const task = await this.store.findRecord('task', activeTask.id, { reload: true });
      if (activeTask) {
        activeTask.destroyRecord(); // => DELETE to /posts/2
        this.set('currentComponent', "list");
        this.set('activeTask', null);
      }
    },
    async toggleStar(task) {
      // const taskObj = await this.store.findRecord('task', task.id);
      task.set('stared', !task.stared);
      task.save();
    },
    async toggleComplete(task) {
      // const taskObj = await this.store.findRecord('task', task.id);
      task.set('completed', !task.completed);
      task.save();
    },
    async toggleLabel(label, task) {
      // const taskObj = await this.store.findRecord('task', task.id);
      // const taskLabelIds = task.labels.map(label => label.id);

      // if (!taskLabelIds.includes(Number(label.id))) {
      //   task.labels.push(label);
      // } else {

      // }
      task.set('labels', label);
      task.set('computedlabel', label.id);
      task.save();
    }
  }
});
