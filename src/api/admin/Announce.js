import { contextInstance } from '../axios'

/**
 * Create new announce
 * @param Announce **Thông báo**
 * 
 * - `content`: Nội dung 
 * - `seen`: Đã xem 
 * 
 * - `userId`: người dùng 
 */
const createAnnounce = async(announce) => {
  return contextInstance.post(`admin/announce`, announce);
}

/**
 * Get all announces
 * @return
 * 
 * - `content`: Nội dung 
 * - `seen`: Đã xem 
 * 
 * - `userId`: người dùng 
 */
const listAnnounces = async() => {
  return contextInstance.get(`admin/announce`);
}

/**
 * Get announce by `id`
 * @param id id Thông báo
 * @return
 * 
 * - `content`: Nội dung 
 * - `seen`: Đã xem 
 * 
 * - `userId`: người dùng 
 */
const getAnnounceById = async(id) => {
  return contextInstance.get(`admin/announce/${id}`);
}

/**
 * Update announce by `announce.id`
 * @param Announce **Thông báo**
 * 
 * - `content`: Nội dung 
 * - `seen`: Đã xem 
 * 
 * - `userId`: người dùng 
 */
const updateAnnounce = async(announce) => {
  return contextInstance.put(`admin/announce/${announce.id}/update`, announce);
}

/**
 * Delete announce by `announce.id`
 * @param Announce **Thông báo**
 */
const deleteAnnounce = async(announce) => {
  return contextInstance.delete(`admin/announce/${announce.id}/delete`, announce);
}

export {
  createAnnounce,
  updateAnnounce,
  getAnnounceById,
  listAnnounces,
  deleteAnnounce,
  
}