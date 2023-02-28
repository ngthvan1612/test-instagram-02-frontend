import { contextInstance } from '../axios'

/**
 * Create new announce
 * @param Announce **Thông báo**
 * 
 * - `content`: Nội dung 
 * - `seen`: Đã xem 
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
 */
const updateAnnounce = async(announce) => {
  return contextInstance.put(`admin/announce/${announce.id}`);
}

/**
 * Delete announce by `announce.id`
 * @param Announce **Thông báo**
 */
const deleteAnnounce = async(announce) => {
  return contextInstance.delete(`admin/announce/${announce.id}`);
}

export {
  createAnnounce,
  updateAnnounce,
  getAnnounceById,
  listAnnounces,
  deleteAnnounce
}
