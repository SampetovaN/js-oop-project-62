import _ from 'lodash';

const mappingValidation = {
  required: (value) => !_.isNil(value) && value !== '',
  minLength: (value, minLength) => value.length >= minLength,
  contains: (value, str) => value.includes(str),
};

export default mappingValidation;
