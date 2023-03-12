import { contextInstance } from '../axios'

/**
 * Create new userGroupMessage
 * @param UserGroupMessage **Chi tiết nhóm**
 * 
 * 
 * - `groupId`: Nhóm 
 * - `memberId`: thành viên 
 */
const createUserGroupMessage = async(userGroupMessage) => {
  return contextInstance.post(`admin/user-group-message`, userGroupMessage);
}

/**
 * Get all userGroupMessages
 * @return
 * 
 * 
 * - `groupId`: Nhóm 
 * - `memberId`: thành viên 
 */
const listUserGroupMessages = async() => {
  return contextInstance.get(`admin/user-group-message`);
}

/**
 * Get userGroupMessage by `id`
 * @param id id Chi tiết nhóm
 * @return
 * 
 * 
 * - `groupId`: Nhóm 
 * - `memberId`: thành viên 
 */
const getUserGroupMessageById = async(id) => {
  return contextInstance.get(`admin/user-group-message/${id}`);
}

/**
 * Update userGroupMessage by `userGroupMessage.id`
 * @param UserGroupMessage **Chi tiết nhóm**
 * 
 * 
 * - `groupId`: Nhóm 
 * - `memberId`: thành viên 
 */
const updateUserGroupMessage = async(userGroupMessage) => {
  return contextInstance.put(`admin/user-group-message/${userGroupMessage.id}/update`, userGroupMessage);
}

/**
 * Delete userGroupMessage by `userGroupMessage.id`
 * @param UserGroupMessage **Chi tiết nhóm**
 */
const deleteUserGroupMessage = async(userGroupMessage) => {
  return contextInstance.delete(`admin/user-group-message/${userGroupMessage.id}/delete`, userGroupMessage);
}

export {
  createUserGroupMessage,
  updateUserGroupMessage,
  getUserGroupMessageById,
  listUserGroupMessages,
  deleteUserGroupMessage,
  
}