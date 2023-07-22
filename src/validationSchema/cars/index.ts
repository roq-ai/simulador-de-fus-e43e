import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  speed: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
