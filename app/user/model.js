import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),

  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 6
    })
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});
