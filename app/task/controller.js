import Controller from '@ember/controller';
import { computed } from '@ember/object';
import map from "lodash/map";
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  title: "",
  createTaskErr: null,
  currentComponent: "list",
  activeTask: null,
  activeLabelFilter: 0,
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
  taskList: computed('activeLabelFilter', function () {
    const tasks = this.model.task;

    const filteredTasks = this.activeLabelFilter === 0 ? tasks : tasks.filter((task) => map(task.labels, 'id').includes(Number(this.activeLabelFilter)));
    return filteredTasks;
  }),
  actions: {
    logout() {
      this.transitionToRoute('login');
    },
    async createTask() {
      // CREATE TASK
      if (this.get("title").length) {
        this.ajax.fire('tasks', "POST", { "title": this.get("title") }).then(res => {
          this.store.createRecord('task', res.task);
          this.set('createTaskErr', null);
          this.set("title", "");
        }, error => {
          this.set('createTaskErr', (() => error.responseJSON)());
        });
        // RESET FILTER
        this.set("activeLabelFilter", 0);
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
        activeTask.set('computedlabel', null);
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
    },
    filterTask(id) {
      this.set("activeLabelFilter", id);
    }
  }
});
