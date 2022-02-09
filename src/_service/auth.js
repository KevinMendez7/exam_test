import axios from 'axios'
import { setSession } from 'utils/token';

export const login = async ({ email, password }) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_URL_SERVICE}/api/auth/login`, JSON.stringify({ email, password }));
    if(resp.data?.success === true) {
      setSession(resp.data?.message)
    }
  } catch(error) {
    throw error;
  }
}

export const register = async ({ email, password }) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_URL_SERVICE}/api/auth/register`, JSON.stringify({ email, password }));
    if(resp.data?.success === true) {
      return true;
    }

    return false;
  } catch(error) {
    throw error;
  }
}

