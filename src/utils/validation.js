export const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
/**
 * Password should have atleast one
 * lower case, digit
 * and should be atleast 8 characters
 * */
export const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{8,})');
export const usernameRegex = new RegExp('^[a-zA-Z0-9.-_$@*!]{3,30}$');


export const validate = (data) => {
  const {
    title,
    body,
  } = data;
  const errors = {};
  if (title === '') errors.title = 'Title field required';
  let text = '';

  for (let i = 0; i < body.length; i += 1) {
    if (body[i].text === '' && text === '') {
      errors.body = 'Body field required';
    } else {
      text = title;
      delete errors.body;
    }
  }
  return errors;
};

export default testEmail;
