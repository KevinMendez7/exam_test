// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}
 
// set the token and user from the session storage
export const setSession = (token) => {
  sessionStorage.setItem('token', token);
}