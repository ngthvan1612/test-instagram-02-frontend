import axios from "axios"
import { BACKEND_URL, ACCESS_TOKEN_KEY_NAME } from '../../types'

/**
 * for normal request
 */
// TODO: use node.env to solve hard-code!!!
const contextInstance = axios.create({
  baseURL: `${BACKEND_URL}/api`
})

contextInstance.interceptors.request.use((config) => {
  /*
    //Nhớ xử lý logic khúc này kĩ kĩ
  */
  const ACCESS_TOKEN = localStorage.getItem(ACCESS_TOKEN_KEY_NAME);

  if (ACCESS_TOKEN != null) { //null, undefined, '', ...
    config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
  }

  return config;
})

/**
 * for refresh token request, login, ...
 */

const authInstance = axios.create({
  baseURL: `${BACKEND_URL}/api/auth`
})

authInstance.interceptors.request.use((config) => {
  return config;
})

export {
  contextInstance, authInstance
}