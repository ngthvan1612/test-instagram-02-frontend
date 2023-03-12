import { contextInstance } from '../axios'

/**
 * Create new groupMessage
 * @param GroupMessage **Nhóm**
 * 
 * - `displayName`: Tên nhóm 
 * 
 * - `adminId`: quản trị viên 
 */
const createGroupMessage = async(groupMessage) => {
  return contextInstance.post(`admin/group-message`, groupMessage);
}

/**
 * Get all groupMessages
 * @return
 * 
 * - `displayName`: Tên nhóm 
 * 
 * - `adminId`: quản trị viên 
 */
const listGroupMessages = async() => {
  return contextInstance.get(`admin/group-message`);
}

/**
 * Get groupMessage by `id`
 * @param id id Nhóm
 * @return
 * 
 * - `displayName`: Tên nhóm 
 * 
 * - `adminId`: quản trị viên 
 */
const getGroupMessageById = async(id) => {
  return contextInstance.get(`admin/group-message/${id}`);
}

/**
 * Update groupMessage by `groupMessage.id`
 * @param GroupMessage **Nhóm**
 * 
 * - `displayName`: Tên nhóm 
 * 
 * - `adminId`: quản trị viên 
 */
const updateGroupMessage = async(groupMessage) => {
  return contextInstance.put(`admin/group-message/${groupMessage.id}/update`, groupMessage);
}

/**
 * Delete groupMessage by `groupMessage.id`
 * @param GroupMessage **Nhóm**
 */
const deleteGroupMessage = async(groupMessage) => {
  return contextInstance.delete(`admin/group-message/${groupMessage.id}/delete`, groupMessage);
}

export {
  createGroupMessage,
  updateGroupMessage,
  getGroupMessageById,
  listGroupMessages,
  deleteGroupMessage,
  
}