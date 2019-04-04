import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
  {
    title: {
      description: 'Title',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 20,
          max: 32
        })
      ]
    }
  }
);

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  details: DS.attr('string'),
  user: DS.belongsTo('user'),
  completed: DS.attr('boolean'),
  duedate_at: DS.attr('date'),
  stared: DS.attr('boolean'),
  labels: DS.attr({}),
  computedlabel: DS.attr('number')
});
