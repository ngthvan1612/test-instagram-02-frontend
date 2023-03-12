import { contextInstance } from '../axios'

/**
 * Create new user
 * @param User **người dùng**
 * 
 * - `username`: tên người dùng 
 * - `password`: mật khẩu 
 * - `displayName`: tên hiển thị 
 * - `birthday`: ngày sinh 
 * - `avatar`: ảnh đại diện 
 * - `profile`: Thông tin cá nhân 
 * - `gender`: Giới tính 
 * - `role`: Vai trò 
 * 
 */
const createUser = async(user) => {
  return contextInstance.post(`admin/user`, user);
}

/**
 * Get all users
 * @return
 * 
 * - `username`: tên người dùng 
 * - `password`: mật khẩu 
 * - `displayName`: tên hiển thị 
 * - `birthday`: ngày sinh 
 * - `avatar`: ảnh đại diện 
 * - `profile`: Thông tin cá nhân 
 * - `gender`: Giới tính 
 * - `role`: Vai trò 
 * 
 */
const listUsers = async() => {
  return contextInstance.get(`admin/user`);
}

/**
 * Get user by `id`
 * @param id id người dùng
 * @return
 * 
 * - `username`: tên người dùng 
 * - `password`: mật khẩu 
 * - `displayName`: tên hiển thị 
 * - `birthday`: ngày sinh 
 * - `avatar`: ảnh đại diện 
 * - `profile`: Thông tin cá nhân 
 * - `gender`: Giới tính 
 * - `role`: Vai trò 
 * 
 */
const getUserById = async(id) => {
  return contextInstance.get(`admin/user/${id}`);
}

/**
 * Update user by `user.id`
 * @param User **người dùng**
 * 
 * - `username`: tên người dùng 
 * - `password`: mật khẩu 
 * - `displayName`: tên hiển thị 
 * - `birthday`: ngày sinh 
 * - `avatar`: ảnh đại diện 
 * - `profile`: Thông tin cá nhân 
 * - `gender`: Giới tính 
 * - `role`: Vai trò 
 * 
 */
const updateUser = async(user) => {
  return contextInstance.put(`admin/user/${user.id}/update`, user);
}

/**
 * Update user by `userId`
 */
const updateUserAvatar = async(userId, file) => {
  const formData = new FormData();
  formData.append("avatarFile", file);
  return contextInstance.put(`admin/user/${userId}/update-avatar`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * Delete user by `user.id`
 * @param User **người dùng**
 */
const deleteUser = async(user) => {
  return contextInstance.delete(`admin/user/${user.id}/delete`, user);
}

export {
  createUser,
  updateUser,
  getUserById,
  listUsers,
  deleteUser,
  
  updateUserAvatar,
}