export const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
export const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
export const usernameRegex = new RegExp('^[a-zA-Z0-9.-_$@*!]{3,30}$');

export default testEmail;
