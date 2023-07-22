import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  difficulty_level: yup.number().integer().required(),
  obstacles: yup.number().integer().required(),
  desenvolvedora_id: yup.string().nullable(),
});
