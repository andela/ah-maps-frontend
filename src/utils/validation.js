export const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
/**
 * Password should have atleast one
 * lower case, digit
 * and should be atleast 8 characters
 * */
export const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{8,})');
export const usernameRegex = new RegExp('^[a-zA-Z0-9.-_$@*!]{3,30}$');

export default testEmail;
