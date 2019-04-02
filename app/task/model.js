import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  details: DS.attr('string'),
  user: DS.belongsTo('user'),
  completed: DS.attr('boolean'),
  duedate_at: DS.attr('date'),
  stared: DS.attr('boolean'),
  labels: DS.attr({}),
  computedlabel: DS.attr('number')
});
