import axios from "axios"

/**
 * for normal request
 */
// TODO: use node.env to solve hard-code!!!
const contextInstance = axios.create({
  baseURL: 'http://localhost:8080/api'
})

contextInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzMyMjg4OCwiZXhwIjoxNjc3OTI3Njg4fQ.P9boe9AacJvDjd1H7Ddh23ZzosetWLdnvQ1kC7-bWmCPRHOEoLDIBZ6nwRVO-youegoHVqlMg9RsjUHIEkKSOA';
  return config;
})

/**
 * for refresh token request, login, ...
 */

const authInstance = axios.create({
  baseURL: 'http://localhost:8080/auth'
})

authInstance.interceptors.request.use((config) => {
  return config;
})

export {
  contextInstance, authInstance
}
