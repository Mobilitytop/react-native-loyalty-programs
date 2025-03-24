import * as Yup from 'yup';

export const issueCardSchema = Yup.object().shape({
  first_name: Yup.string().trim().min(2).required(),
  last_name: Yup.string().trim().min(2).required(),
  pat_name: Yup.string().trim().min(2).required(),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required(),
  phone: Yup.string().trim().min(18).required(),
  birthday: Yup.string().trim().min(10).required(),
});
